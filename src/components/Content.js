import React, { useEffect, useState } from "react";
import UnicornList from "./UnicornList";
import "./styles.scss";

const Content = () => {
  const [unicorns, setUnicorns] = useState([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/ab4923116b8c44179364ab0d7e5a1f7a/unicorns")
      .then((response) => response.json())
      .then((data) => setUnicorns(data))
      .catch((error) => {
        console.error("Trying to get the unicorns from API, Error:", error);
      });
  }, []);

  return (
    <div>
      <table className="contentTable">
        {/* //Thader */}
        <tr className="contentTitles">
          <td>Name</td>
          <td>Age</td>
          <td>Color</td>
          <td>Options</td>
        </tr>
        <tbody>
          {unicorns.map((uni) => {
            return <UnicornList data={uni} key={uni._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
