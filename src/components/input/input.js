import React, { useState } from "react";
import "./input.scss";

export default function Input() {
  const [newUni, setNewUni] = useState({
    name: "",
    age: "",
    colour: "",
  });

  function createUni() {
    fetch(
      "https://crudcrud.com/api/d3f0a69747e6453d8422fa226bfe2ba0/unicorns",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUni),
      }
    )
      .then((response) => response.json())
      .then((newUni) => {
        console.log("Success:", newUni);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="input">
      <div className="inputBoxes">
        <div>
          Name:
          <input
            type="text"
            onChange={(text) =>
              setNewUni({ ...newUni, name: text.target.value })
            }
          />
        </div>
        <div>
          Age:
          <input
            type="number"
            onChange={(text) =>
              setNewUni({ ...newUni, age: text.target.value })
            }
          />
        </div>
        <div>
          Color:
          <input
            type="text"
            onChange={(text) =>
              setNewUni({ ...newUni, colour: text.target.value })
            }
          />
        </div>
      </div>
      <button className="inputButton" onClick={createUni}>
        OK
      </button>
    </div>
  );
}
