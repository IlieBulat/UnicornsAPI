import React from "react";
import "./unicorn.scss";

export default function Unicorn({ data }) {
  let id = data._id;
  function deleteItem() {
    fetch(
      "https://crudcrud.com/api/d3f0a69747e6453d8422fa226bfe2ba0/unicorns/" +
        id,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.text())
      .then((res) => console.log(res));
  }
  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td>
            <div className="uniName">{data.name}</div>
          </td>
          <td>
            <div className="uniAge">Age: {data.age}</div>
          </td>
          <td>
            <div className="uniColour">Color: {data.colour}</div>
          </td>
          <td>
            <button onClick={deleteItem}>Delete</button>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
}
