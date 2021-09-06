import React from "react";
import "./unicorn.scss";

export default function Unicorn({ data }) {
  return (
    <div className="box">
      <div className="uniName">{data.name}</div>
      <div className="uniAge">Age: {data.age}</div>
      <div className="uniColour" style={{ color: data.colour }}>
        {data.colour}
      </div>
    </div>
  );
}
