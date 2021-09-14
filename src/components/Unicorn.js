import React, { useState, useEffect } from "react";
import "./styles.scss";
import { apiDeleteUnicorn, apiEditUnicorn } from "../store/thunks";
import { useDispatch } from "react-redux";

import { nameCheck, ageCheck, colorCheck } from "../dataValidation/validator";

const Unicorn = ({ data }) => {
  const dispatch = useDispatch();

  const [isEditMode, setIsEditMode] = useState(false);

  const [newUni, setNewUni] = useState(data);

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

  if (isEditMode) {
    return (
      <tr>
        <td>
          <input
            defaultValue={data.name}
            className={nameCheck(newUni.name) ? "corect" : "wrong"}
            onChange={(text) =>
              setNewUni({ ...newUni, name: text.target.value })
            }
          />
        </td>
        <td>
          <input
            type="number"
            defaultValue={data.age}
            className={ageCheck(newUni.age) ? "corect" : "wrong"}
            onChange={(text) =>
              setNewUni({ ...newUni, age: text.target.value })
            }
          />
        </td>
        <td>
          <input
            defaultValue={data.colour}
            className={colorCheck(newUni.colour) ? "corect" : "wrong"}
            onChange={(text) =>
              setNewUni({ ...newUni, colour: text.target.value })
            }
          />
        </td>
        <td>
          <button
            disabled={buttonState}
            onClick={() => {
              setIsEditMode(!isEditMode);
              dispatch(apiEditUnicorn(newUni, data._id));
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}
          >
            Cancel
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>
          <div className="uniName">{data.name}</div>
        </td>
        <td>
          <div className="uniAge">{data.age}</div>
        </td>
        <td>
          <div className="uniColour">{data.colour}</div>
        </td>
        <td>
          <button onClick={() => setIsEditMode(!isEditMode)}>Edit</button>
          <button
            onClick={() => {
              dispatch(apiDeleteUnicorn(data._id));
            }}
            className="deleteButton"
          >
            &#9932;
          </button>
        </td>
      </tr>
    );
  }
};

export default Unicorn;
