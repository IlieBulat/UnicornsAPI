import React, { useEffect } from "react";
import Unicorn from "./Unicorn";
import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { apiGetData } from "../store/thunks";

const Content = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.allReducers.unicorns;
  });
  const errorMessage = useSelector((state) => {
    return state.allReducers.error;
  });
  const loadingState = useSelector((state) => {
    return state.allReducers.isLoading;
  });

  useEffect(() => {
    dispatch(apiGetData());
  }, [dispatch]);

  if (loadingState) {
    return (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    );
  }
  return (
    <div>
      <h2 className="wrong">{errorMessage}</h2>
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
          {data?.map((unicorn) => {
            return <Unicorn data={unicorn} key={unicorn._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
