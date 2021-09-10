import React from "react";
import "./styles.scss";

import { deleteData } from "../apiControl/apiControl";

import { deleteUnicorn } from "../store/reducers/actions";
import { useDispatch } from "react-redux";

const UnicornList = ({ data }) => {
  const dispatch = useDispatch();
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
        <button>Edit</button>
        <button
          onClick={() => {
            // deleteData(data._id);
            dispatch(deleteUnicorn(data._id));
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UnicornList;
