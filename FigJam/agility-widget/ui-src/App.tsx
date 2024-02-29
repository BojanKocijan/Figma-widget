import React, { useEffect, useState } from "react";
import "./App.css";
import createAgilityAPIInstance from "./agilityAPI";

function App() {
  const [accessCode, setAccessCode] = useState("");
  const [agilityUrl, setAgilityUrl] = useState("");
  const [selectedCount, setSelectedCount] = useState(0);
  const [connectionValidated, setConnectionValidated] = useState(false);

  let agilityAPIInstance:any;

  useEffect(() => {
    (globalThis as any).onmessage = (event:any) => {
      const type = event.data.pluginMessage.type;
      let selection: any[];
      switch(type) {
        case "init":
          const { accessCode, agilityUrl } = event.data.pluginMessage;
          selection = event.data.pluginMessage.selection;
          setAccessCode(accessCode);
          setAgilityUrl(agilityUrl);
          setSelectedCount(selection.length);
          agilityAPIInstance = createAgilityAPIInstance(agilityUrl, accessCode);
          validateConnection(agilityAPIInstance, setConnectionValidated);
          break;
        case "selectionchange":
          selection = event.data.pluginMessage.selection;
          setSelectedCount(selection.length);
          break;
      }
    }
  }, []);

  if (accessCode && agilityUrl) {
    agilityAPIInstance = createAgilityAPIInstance(agilityUrl, accessCode);
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
  const selectedText = selectedCount > 0 ?
    (selectedCount === 1 ? "1 sticky selected" : `${selectedCount} stickies selected`) : "No sticky selected";
  return (
    <div className="App">
      <h3>
        {
          selectedText
        }
      </h3>
      <p>Select the sticky to convert it to Agility work item.</p>
      <button
        disabled={selectedCount !== 1}
        onClick={() => {
          parent?.postMessage?.({ pluginMessage: "close" }, "*");
        }}
      >
        Convert 1 sticky
      </button>
      <div>
      <button
        onClick={() => {
          setAccessCode("");
          setAgilityUrl("");
          parent?.postMessage?.({ pluginMessage: "logout" }, "*");
        }}
      >
        Logout
      </button>
      </div>
    </div>
  );
}

export default App;

async function validateConnection(agilityAPIInstance: any, setConnectionValidated: React.Dispatch<React.SetStateAction<boolean>>) {
  const testRequest = { "from": "Member", "filter": "IsSelf='true'" };
  const resp = await agilityAPIInstance.query(testRequest);
  setConnectionValidated(true);
}

