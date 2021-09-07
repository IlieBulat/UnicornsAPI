import React from "react";
import "./styles.scss";

const UnicornList = ({ data }) => {
  const deleteUnicorn = () => {
    fetch(
      "https://crudcrud.com/api/d3f0a69747e6453d8422fa226bfe2ba0/unicorns/" +
        data._id,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((error) => {
        console.error("Trying to delete a Unicorn, Error:", error);
      });
  };
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
            <button>Edit</button>
            <button onClick={deleteUnicorn}>Delete</button>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default UnicornList;
