import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, combineReducers } from "redux";

const initialState = {
  result: 15000,
  value: []
};

/** reducer เป็น pure function ต้อง malloc ใหม่*/
const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        value: [...state.value, action.payload],
        result: state.result + action.payload
      };
      break;
    case "SUBTRACT":
      state = {
        value: [...state.value, -action.payload],
        result: state.result - action.payload
      };
      break;
    default:
  }
  return state;
};

const userReducer = (state = { name: "Johnny", age: 10 }, action) => {
  switch (action.type) {
    case "setName":
      state = { ...state, name: action.payload };
      break;
    case "setAge":
      state = { ...state, age: action.payload };
      break;
    default:
  }
  return state;
};

/** store จะเก็บ state */
// const store = createStore(employeeReducer);
const store = createStore(combineReducers({ employeeReducer, userReducer }));

/** ใช้ในการ update ค่า state */
store.subscribe(() => {
  console.log("Update Store:", store.getState());
});

/** ใช้ dispatch ในการเปลี่ยนแปลง state */
store.dispatch({
  type: "ADD",
  payload: 15000
});

store.dispatch({
  type: "ADD",
  payload: 15000
});

store.dispatch({
  type: "setAge",
  payload: 1000
});

store.dispatch({
  type: "setName",
  payload: "redux"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
