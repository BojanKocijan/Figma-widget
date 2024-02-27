import React, { useEffect, useState } from "react";
import "./App.css";

function agilityAPI(baseUrl = '', accessCode:string) {

  async function postData(path = '', data = {}) {
    const response = await fetch(`${baseUrl}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessCode}`
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async function get(path = '') {
    const response = await fetch(`${baseUrl}${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status !== 200) {
      throw new Error('Invalid access code or Agility URL');
    }
    return response.json();
  }

  return {
    asset: async (data:any) => {
      return postData('/api/asset', data);
    },
    query: async (data:any) => {
      return postData('/query.v1', data);
    },
    meta: async () => {
      return get('/meta.v1');
    }
  }
}

function App() {
  const [accessCode, setAccessCode] = useState("");
  const [agilityUrl, setAgilityUrl] = useState("");
  const [connectionValidated, setConnectionValidated] = useState(false);

  let agilityAPIInstance:any;

  useEffect(() => {
    (globalThis as any).onmessage = (event:any) => {
      if (event.data.pluginMessage.accessCode) {
        const { accessCode, agilityUrl } = event.data.pluginMessage;
        setAccessCode(accessCode);
        setAgilityUrl(agilityUrl);
        agilityAPIInstance = agilityAPI(agilityUrl, accessCode);
        validateConnection(agilityAPIInstance, setConnectionValidated);
      }
      if (event.data.pluginMessage.type === "selectionchange") {

      }
    }
  }, []);

  if (accessCode && agilityUrl) {
    agilityAPIInstance = agilityAPI(agilityUrl, accessCode);
  }

  // useEffect(() => {
  //   if (typeof parent !== undefined) {
  //     parent?.postMessage?.({ pluginMessage: "Agility work item imported" }, "*");
  //   }
  // }, []);
  if (!accessCode || !agilityUrl || !connectionValidated) {
    return (
      <div className="App">
        <h3>Configure Agility Access</h3>
        <p>
          To integrate with Agility, please provide the access code and Agility
          URL.
        </p>
          <div>
            <label htmlFor="accessCode">Access code:</label>
            <input
              type="text"
              id="accessCode"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="agilityUrl">Agility URL:</label>
            <input
              type="text"
              id="agilityUrl"
              value={agilityUrl}
              onChange={(e) => setAgilityUrl(e.target.value)}
            />
          </div>
          <button
            disabled={!accessCode || !agilityUrl}
            onClick={async () => {
              try {
                await validateConnection(agilityAPIInstance, setConnectionValidated);
                parent?.postMessage?.({ pluginMessage: {accessCode, agilityUrl }}, "*");
              } catch (e) {
                console.log(e);
              }
            }}
          >
            Validate and Save
          </button>
      </div>
    );
  }
  return (
    <div className="App">
      <div>{accessCode}</div>
      <div>{agilityUrl}</div>
      <h3>No sticky selected</h3>
      <p>Select the sticky to convert it to Agility work item.</p>
      <button
        onClick={() => {
          parent?.postMessage?.({ pluginMessage: "close" }, "*");
        }}
      >
        Convert 1 sticky
      </button>
    </div>
  );
}

export default App;

async function validateConnection(agilityAPIInstance: any, setConnectionValidated: React.Dispatch<React.SetStateAction<boolean>>) {
  const testRequest = { "from": "Member", "filter": "IsSelf='true'" };
  const resp = await agilityAPIInstance.query(testRequest);
  setConnectionValidated(true);
}

