import React from "react";

import "./App.css";
import Content from "./components/Content";
import DataInput from "./components/input/DataInput";

function App() {
  return (
    <div className="App">
      <DataInput />
      <Content />
    </div>
  );
}

export default App;
