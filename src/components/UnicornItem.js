import React, { useState } from "react";
import "./styles.scss";

import { deleteUnicorn, editUnicorn } from "../store/actions";
import { useDispatch } from "react-redux";

const UnicornItem = ({ data }) => {
  const [editActivator, setEditActivator] = useState(false);
  const [editedUnicorn, setEditedUnicorn] = useState(data);
  const dispatch = useDispatch();

  // dispatch(editUnicorn(data, data._id)) POST NEW DATA
  if (editActivator) {
    return (
      <tr>
        <td>
          <input defaultValue={data.name} className="uniName" />
        </td>
        <td>
          <input defaultValue={data.age} className="uniAge" />
        </td>
        <td>
          <input defaultValue={data.colour} className="uniColour" />
        </td>
        <td>
          <button onClick={() => setEditActivator(!editActivator)}>Save</button>
          <button
            onClick={() => {
              setEditActivator(!editActivator);
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
          <button onClick={() => setEditActivator(!editActivator)}>Edit</button>
          <button
            onClick={() => {
              dispatch(deleteUnicorn(data._id));
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
};

export default UnicornItem;
