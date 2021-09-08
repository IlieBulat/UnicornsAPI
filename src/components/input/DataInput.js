import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import "./input.scss";
import colors from "./colors";

const pattern = new RegExp(/^[a-zA-Z]+$/);

const DataInput = () => {
  const [newUni, setNewUni] = useState({
    name: "",
    colour: "",
    age: "",
  });

  //Button disabler
  const [buttonState, setButtonState] = useState(true);

  //Validation
  const [valid, setValid] = useState({
    name: false,
    age: false,
    colour: false,
  });

  //Name validation
  useEffect(() => {
    let nameResult = pattern.test(newUni.name);
    if (!nameResult || newUni.name.length < 2) {
      setValid({ ...valid, name: false });
    } else {
      setValid({ ...valid, name: true });
    }
  }, [newUni.name]);

  //Age validation
  useEffect(() => {
    if (newUni.age > 20 || newUni.age < 0) {
      setValid({ ...valid, age: false });
    } else {
      setValid({ ...valid, age: true });
    }
  }, [newUni.age]);

  // Color Validation
  useEffect(() => {
    const colorSearch = colors.filter((data) =>
      data.toLowerCase().includes(newUni.colour.trim().toLowerCase())
    );
    const verify = (element) =>
      element.toLowerCase() === newUni.colour.trim().toLowerCase();

    let searchResult = Object.values(colorSearch).some(verify); //true or false

    if (!searchResult) {
      setValid({ ...valid, colour: false });
    } else {
      setValid({ ...valid, colour: true });
    }
  }, [newUni.colour]);

  //Enabling and disabling the ADD button
  useEffect(() => {
    const verify = (element) => element === false;
    let result = Object.values(valid).some(verify);
    setButtonState(result);
  }, [valid]);

  const createUni = () => {
    fetch(
      "https://crudcrud.com/api/ab4923116b8c44179364ab0d7e5a1f7a/unicorns",
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
            className={valid.name ? "corectInput" : "wrongInput"}
            type="text"
            label="Name"
            variant="outlined"
            onChange={
              (text) => setNewUni({ ...newUni, name: text.target.value })
              //Validation useEffenct aici
            }
            required
          />
        </div>
        <div>
          Age:
          <input
            className={valid.age ? "corectInput" : "wrongInput"}
            type="number"
            label="Age"
            variant="outlined"
            onChange={(text) =>
              setNewUni({ ...newUni, age: text.target.value })
            }
            required
          />
        </div>
        <div>
          Color:
          <input
            onChange={(text) =>
              setNewUni({ ...newUni, colour: text.target.value })
            }
            className={valid.colour ? "corectInput" : "wrongInput"}
            label="Color"
            variant="outlined"
            required
          />
        </div>
        <Button
          disabled={buttonState}
          onClick={createUni}
          className="inputButton"
          variant="outlined"
        >
          ADD
        </Button>
      </form>
    </div>
  );
};

export default DataInput;
