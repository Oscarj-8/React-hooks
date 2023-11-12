import { useReducer } from "react";

const InitialValue = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "Decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "Increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "Decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "Reset":
      return { ...state, firstCounter: InitialValue.firstCounter };
    case "Reset2":
      return { ...state, secondCounter: InitialValue.secondCounter };
    case "default":
      return state;
  }
};

function UseReducerObj() {
  const [count, dispatch] = useReducer(reducer, InitialValue);

  return (
    <div>
      <h1>This is new one</h1>
      <h2>Count One {count.firstCounter}</h2>
      <h2>Count Two {count.secondCounter}</h2>
      <button
        type="button"
        onClick={() => dispatch({ type: "Increment", value: 1 })}
      >
        Increment 1
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "Decrement", value: 1 })}
      >
        Decrement 1
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "Increment", value: 5 })}
      >
        Increment 5
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "Decrement", value: 5 })}
      >
        Decrement 5
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "Increment2", value: 5 })}
      >
        Increment 5
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "Decrement2", value: 5 })}
      >
        Decrement 5
      </button>
      <button type="button" onClick={() => dispatch({ type: "Reset" })}>
        Reset
      </button>
      <button type="button" onClick={() => dispatch({ type: "Reset2" })}>
        Reset 2
      </button>
    </div>
  );
}
export default UseReducerObj;
