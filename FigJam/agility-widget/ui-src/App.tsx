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
