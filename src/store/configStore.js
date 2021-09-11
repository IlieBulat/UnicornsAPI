import { createStore, combineReducers, applyMiddleware } from "redux";
import { generalReducer } from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({ generalReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
