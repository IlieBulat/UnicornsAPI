import React, { useEffect, useState } from "react";
import "./input.scss";

import { postUnicorn } from "../../store/actions";
import { useDispatch } from "react-redux";

import {
  nameCheck,
  ageCheck,
  colorCheck,
} from "../../dataValidation/validator";

const DataInput = () => {
  const dispatch = useDispatch();

  const [newUni, setNewUni] = useState({
    name: "",
    colour: "",
    age: "",
  });

  const [valid, setValid] = useState({
    name: false,
    age: false,
    colour: false,
  });

  const buttonState = Object.values(valid).some((element) => element === false);

  useEffect(() => {
    setValid({
      name: nameCheck(newUni.name),
      age: ageCheck(newUni.age),
      colour: colorCheck(newUni.colour),
    });
  }, [newUni]);

  return (
    <div className="input">
      <div className="inputBoxes">
        <div>
          Name:
          <input
            className={nameCheck(newUni.name) ? "corect" : "wrong"}
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
          Age:
          <input
            className={ageCheck(newUni.age) ? "corect" : "wrong"}
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
            className={colorCheck(newUni.colour) ? "corect" : "wrong"}
            label="Color"
            variant="outlined"
            required
          />
        </div>
        <button
          disabled={buttonState}
          onClick={() => {
            dispatch(postUnicorn(newUni));
          }}
          className={buttonState ? "wrongInput" : "corectInput"}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default DataInput;
