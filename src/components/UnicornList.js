import React from "react";
import "./styles.scss";

const UnicornList = ({ data }) => {
  const deleteUnicorn = () => {
    fetch(
      "https://crudcrud.com/api/ab4923116b8c44179364ab0d7e5a1f7a/unicorns/" +
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
  );
};

export default UnicornList;
