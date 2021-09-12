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

  const [newUnicorn, setNewUnicorn] = useState({
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
      name: nameCheck(newUnicorn.name),
      age: ageCheck(newUnicorn.age),
      colour: colorCheck(newUnicorn.colour),
    });
  }, [newUnicorn]);

  return (
    <div className="input">
      <div className="inputBoxes">
        <div>
          Name:
          <input
            value={newUnicorn.name}
            className={nameCheck(newUnicorn.name) ? "corect" : "wrong"}
            onChange={(text) =>
              setNewUnicorn({ ...newUnicorn, name: text.target.value })
            }
          />
        </div>
        <div>
          Age:
          <input
            value={newUnicorn.age}
            className={ageCheck(newUnicorn.age) ? "corect" : "wrong"}
            type="number"
            onChange={(text) =>
              setNewUnicorn({ ...newUnicorn, age: text.target.value })
            }
          />
        </div>
        <div>
          Color:
          <input
            value={newUnicorn.colour}
            onChange={(text) =>
              setNewUnicorn({ ...newUnicorn, colour: text.target.value })
            }
            className={colorCheck(newUnicorn.colour) ? "corect" : "wrong"}
          />
        </div>
        <button
          disabled={buttonState}
          onClick={() => {
            dispatch(postUnicorn(newUnicorn));
            setNewUnicorn({
              name: "",
              colour: "",
              age: "",
            });
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
