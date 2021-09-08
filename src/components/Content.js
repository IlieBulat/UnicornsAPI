import React, { useEffect, useState } from "react";
import UnicornList from "./UnicornList";
import "./styles.scss";

import getData from "./apiControl/apiControl.js";

const Content = () => {
  //Data Get
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
  }, []);

  return (
    <div>
      <table className="contentTable">
        <thead>
          <tr className="contentTitles">
            <td>Name</td>
            <td>Age</td>
            <td>Color</td>
            <td>Options</td>
          </tr>
        </thead>
        <tbody>
          {data.map((uni) => {
            return <UnicornList data={uni} key={uni._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
