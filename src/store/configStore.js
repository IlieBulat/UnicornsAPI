import { createStore, combineReducers } from "redux";

import { generalReducer } from "./reducers/reducers";

const reducers = combineReducers({ generalReducer });

const store = createStore(reducers);

export default store;
