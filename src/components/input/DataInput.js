import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import "./input.scss";
import colors from "./colors";

const DataInput = () => {
  const [newUni, setNewUni] = useState({
    name: "",
    colour: "",
    age: "",
  });

  const [buttonState, setButtonState] = useState(true);

  //Validation
  const [valid, setValid] = useState({
    name: false,
    age: false,
    colour: false,
  });
  let pattern = new RegExp(/^[a-zA-Z]+$/);

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
    if (newUni.colour.length <= 2) {
      setValid({ ...valid, colour: false });
    } else {
      setValid({ ...valid, colour: true });
    }
  }, [newUni.colour]);

  //Enabling and disabling the ADD button
  useEffect(() => {
    const verify = (element) => element === false;
    let result = Object.values(valid).some(verify);

    if (!result) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }, [valid]);

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

  const classes = useStyles();

  return (
    <div className="input">
      <form className="inputBoxes" action="#">
        <div>
          <TextField
            InputProps={{
              className: "Input__",
            }}
            InputLabelProps={{
              className: "InputAfter__",
            }}
            error={!valid.name}
            type="text"
            label="Name"
            variant="outlined"
            onChange={(text) =>
              setNewUni({ ...newUni, name: text.target.value })
            }
            required
          />
        </div>
        <div>
          <TextField
            classes={classes}
            InputProps={{
              className: "Input__",
            }}
            InputLabelProps={{
              className: "InputAfter__",
            }}
            error={!valid.age}
            type="number"
            label="Age"
            variant="outlined"
            onChange={(text) =>
              setNewUni({ ...newUni, age: text.target.value })
            }
            required
          />
        </div>
        <Autocomplete
          disableClearable
          forcePopupIcon={false}
          classes={classes}
          options={colors}
          style={{ width: 300 }}
          autoSelect={true}
          onChange={(event, value) => setNewUni({ ...newUni, colour: value })}
          renderInput={(params) => (
            <TextField
              error={!valid.colour}
              label="Color"
              {...params}
              variant="outlined"
              required
            />
          )}
        />
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

const useStyles = makeStyles((theme) => ({
  input: {
    color: "white",
  },
}));

export default DataInput;
