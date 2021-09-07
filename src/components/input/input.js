import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./input.scss";
import colors from "./colors";
import Validation from "./Validation";

const Input = () => {
  const [newUni, setNewUni] = useState({
    name: "",
    age: "",
    colour: "",
  });

  const inputsValidation = () => {
    if (Validation(newUni)) {
      createUni();
    }
  };

  const createUni = () => {
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
        console.error("Trying to POST a new unicorn, Error:", error);
      });
  };

  return (
    <div className="input">
      <form className="inputBoxes" action="#">
        <div>
          Name:
          <input
            type="text"
            onChange={(text) =>
              setNewUni({ ...newUni, name: text.target.value })
            }
            required
            minLength="2"
          />
        </div>
        <div>
          Age:
          <input
            type="number"
            onChange={(text) =>
              setNewUni({ ...newUni, age: text.target.value })
            }
            required
            minLength="1"
          />
        </div>
        <Autocomplete
          options={colors}
          style={{ width: 300 }}
          onChange={(event, value) =>
            setNewUni({ ...newUni, colour: value.toLowerCase() })
          }
          autoSelect={true}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Combo box"
              variant="outlined"
              required
            />
          )}
        />
        <button className="inputButton" onClick={inputsValidation}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default Input;
