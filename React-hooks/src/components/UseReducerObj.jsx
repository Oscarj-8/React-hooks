import { useReducer } from "react";

const InitialValue = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { firstCounter: state.firstCounter + 1 };
    case "Decrement":
      return { firstCounter: state.firstCounter - 1 };
    case "Reset":
      return InitialValue;
    case "default":
      return state;
  }
};

function UseReducerObj() {
  const [count, dispatch] = useReducer(reducer, InitialValue);

  return (
    <div>
      <h1>This is new one</h1>
      <h2>Count {count.firstCounter}</h2>
      <button type="button" onClick={() => dispatch({ type: "Increment" })}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch({ type: "Decrement" })}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch({ type: "Reset" })}>
        Reset
      </button>
    </div>
  );
}
export default UseReducerObj;
