import { createStore } from "redux";

/** reducer เป็น pure function */
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state += action.payload;
      break;
    case "SUBTRACT":
      state += action.payload;
      break;
    default:
  }
  return state;
};

/** store จะเก็บ state */
const store = createStore(reducer, 15000);

/** ใช้ dispatch ในการเปลี่ยนแปลง state */
store.dispatch({
  type: "ADD",
  payload: "1000"
});

/** ใช้ในการ update ค่า state */
store.subscribe(() => {
  console.log("Update Store:", store.getState());
});
