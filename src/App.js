import React from "react";

import "./App.css";
import Content from "./components/Content";
import DataInput from "./components/input/DataInput";

import { Provider } from "react-redux";
import store from "./components/store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DataInput />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
