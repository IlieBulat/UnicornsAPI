import React, { useEffect, useState } from "react";
import UnicornList from "./UnicornList";
import "./styles.scss";

import getData from "./apiControl/apiControl.js";

import { useDispatch, useSelector } from "react-redux";
import { triggerChange } from "./store/reducers/actions";

const Content = () => {
  //get REDUX DATA
  const test = useSelector((state) => {
    return state.generalReducer.trigger;
  });
  const [tested, setTested] = useState(test);
  //SET REDUX DATA
  const dispatch = useDispatch();
  function changeTrig(val) {
    dispatch(triggerChange(val));
  }

  //Data Get
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
  }, [tested]);

  return (
    <div>
      <button onClick={() => changeTrig(!test)}>Change</button>
      <button onClick={() => console.log(test)}>Check</button>
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
