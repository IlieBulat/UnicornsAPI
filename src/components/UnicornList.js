import React from "react";
import "./styles.scss";

import { deleteData } from "./apiControl/apiControl";

const UnicornList = ({ data }) => {
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
            deleteData(data._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UnicornList;
