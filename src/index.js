import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";

const initialState = {
  result: 15000,
  value: []
};

/** reducer เป็น pure function */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state.result += action.payload;
      state.value.push(action.payload);
      break;
    case "SUBTRACT":
      state.result -= action.payload;
      state.value.push(-action.payload);
      break;
    default:
  }
  return state;
};

/** store จะเก็บ state */
const store = createStore(reducer);

/** ใช้ในการ update ค่า state */
store.subscribe(() => {
  console.log("Update Store:", store.getState().result);
  console.log("Value Store: ", store.getState().value);
});

/** ใช้ dispatch ในการเปลี่ยนแปลง state */
store.dispatch({
  type: "ADD",
  payload: 0
});

store.dispatch({
  type: "ADD",
  payload: 1000
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
