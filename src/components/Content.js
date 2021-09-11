import React, { useEffect } from "react";
import UnicornItem from "./UnicornItem";
import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../store/actions";

const Content = () => {
  const dispatch = useDispatch();

  //Data Get
  const data = useSelector((state) => {
    return state.generalReducer.unicorns;
  });
  useEffect(() => {
    dispatch(apiCall());
  }, [dispatch]);

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
            return <UnicornItem data={unicorn} key={unicorn._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
