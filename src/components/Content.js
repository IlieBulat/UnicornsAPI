import React, { useEffect, useState } from "react";
import UnicornList from "./UnicornList";
import "./styles.scss";

import getData from "../apiControl/apiControl.js";

import { useDispatch, useSelector } from "react-redux";
import { apiCall, triggerChange } from "../store/reducers/actions";

const Content = () => {
  const dispatch = useDispatch();

  //Data Get
  const data = useSelector((state) => {
    return state.generalReducer.unicorns;
  });
  useEffect(() => {
    dispatch(apiCall());
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
          {data.map((unicorn) => {
            return <UnicornList data={unicorn} key={unicorn._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
