import { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialValue;
    case "Default":
      return state;
  }
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h2>UseReducer</h2>
      Count: {count}
      <button type="button" onClick={() => dispatch("Increment")}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch("Decrement")}>
        Decrement
      </button>{" "}
      <button type="button" onClick={() => dispatch("Reset")}>
        Reset
      </button>
    </div>
  );
}
export default UseReducer;
