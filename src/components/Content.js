import React, { useEffect, useState } from "react";
import UnicornList from "./UnicornList";
import "./styles.scss";

const Content = () => {
  const [unicorns, setUnicorns] = useState([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/d3f0a69747e6453d8422fa226bfe2ba0/unicorns")
      .then((response) => response.json())
      .then((data) => setUnicorns(data))
      .catch((error) => {
        console.error("Trying to get the unicorns from API, Error:", error);
      });
  }, []);

  return (
    <div>
      <table className="contentTable">
        <tbody>
          <tr className="contentTitles">
            <td>Name</td>
            <td>Age</td>
            <td>Color</td>
            <td>Options</td>
          </tr>
        </tbody>
        {unicorns.map((uni) => {
          return <UnicornList data={uni} key={uni._id} />;
        })}
      </table>
    </div>
  );
};

export default Content;
