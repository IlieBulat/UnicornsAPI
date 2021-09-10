import React, { useEffect, useState } from "react";
import "./input.scss";

import { postUnicorn } from "../../store/reducers/actions";
import { useDispatch } from "react-redux";

const pattern = new RegExp(/^[a-zA-Z]+$/);

const DataInput = () => {
  const dispatch = useDispatch();

  const [newUni, setNewUni] = useState({
    name: "",
    colour: "",
    age: "",
  });

  const [buttonState, setButtonState] = useState(true);

  const [valid, setValid] = useState({
    name: false,
    age: false,
    colour: false,
  });

  const nameCheck = (name) => {
    let nameResult = pattern.test(name);
    if (!nameResult || name.length < 2) {
      setValid({ ...valid, name: false });
    } else {
      setValid({ ...valid, name: true });
      setNewUni({ ...newUni, name: name });
    }
  };

  const ageCheck = (age) => {
    if (age < 0 || age === "") {
      setValid({ ...valid, age: false });
    } else {
      setValid({ ...valid, age: true });
      setNewUni({ ...newUni, age: age });
    }
  };

  const isColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== "";
  };

  const colorCheck = (color) => {
    if (isColor(color)) {
      setNewUni({ ...newUni, colour: color });
      setValid({ ...valid, colour: true });
    } else {
      setValid({ ...valid, colour: false });
    }
  };

  useEffect(() => {
    const buttonVerify = (element) => element === false;
    let result = Object.values(valid).some(buttonVerify);
    setButtonState(result);
  }, [valid]);

  return (
    <div className="input">
      <div className="inputBoxes">
        <div>
          Name:
          <input
            className={valid.name ? "corect" : "wrong"}
            type="text"
            label="Name"
            variant="outlined"
            onChange={(text) => nameCheck(text.target.value)}
            required
          />
        </div>
        <div>
          Age:
          <input
            className={valid.age ? "corect" : "wrong"}
            type="number"
            label="Age"
            variant="outlined"
            onChange={(text) => ageCheck(text.target.value)}
            required
          />
        </div>
        <div>
          Color:
          <input
            onChange={(text) => colorCheck(text.target.value)}
            className={isColor(newUni.colour) ? "corect" : "wrong"}
            label="Color"
            variant="outlined"
            required
          />
        </div>
        <button
          disabled={buttonState}
          onClick={() => {
            // postData(newUni);
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
