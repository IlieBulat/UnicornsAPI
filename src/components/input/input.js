import React from "react";
import "./input.scss";

export default function Input() {
  return (
    <div className="input">
      <div className="inputBoxes">
        <div>
          Name: <input type="text" />
        </div>
        <div>
          Age: <input type="number" />
        </div>
        <div>
          Color: <input type="color" />
        </div>
      </div>
      <button className="inputButton">OK</button>
    </div>
  );
}
