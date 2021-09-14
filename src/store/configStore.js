import { createStore, combineReducers, applyMiddleware } from "redux";
import { allReducers } from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({ allReducers });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
