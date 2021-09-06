import React from "react";
import "./unicorn.scss";

export default function Unicorn(props) {
  console.log(props.data);
  return (
    <div class="box">
      <div>{props.data.name}</div>
      <div>{props.data.age}</div>
      <div>{props.data.colour}</div>
    </div>
  );
}
