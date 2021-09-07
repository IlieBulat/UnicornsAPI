import React, { useEffect, useState } from "react";
import Unicorn from "./unicorn";
import "./unicorn.scss";

export default function Call() {
  const [unicorns, setUnicorns] = useState([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/d3f0a69747e6453d8422fa226bfe2ba0/unicorns")
      .then((response) => response.json())
      .then((data) => setUnicorns(data));
  }, []);
  return (
    <div>
      <table className="contentTable">
        {unicorns.map((uni) => {
          return <Unicorn data={uni} key={uni._id} />;
        })}
      </table>
    </div>
  );
}
