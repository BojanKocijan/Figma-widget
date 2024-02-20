import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    if (typeof parent !== undefined) {
      parent?.postMessage?.({ pluginMessage: "Agility work item imported" }, "*");
    }
  }, []);

  return (
    <div className="App">
      <h3>Agility widget test</h3>
      <p>This is just proof that we can add a widget and work on it and make something cool</p>
      <button
        onClick={() => {
          parent?.postMessage?.({ pluginMessage: "close" }, "*");
        }}
      >
        Close
      </button>
    </div>
  );
}

export default App;
