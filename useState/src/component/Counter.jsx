import React, { useState } from "react";

function Counter() {
  let initValue = 0;
  const [count, setCounter] = useState(initValue);
  return (
    <div>
      <h1>Counter {count}</h1>
      <p>
        <i>
          This counter's state is managed by using a react hook called useState
          hook, which allows us to initialize default/inital value and then
          takes another argument as a setter function, which used for altering
          the state based up on some kind of event.
        </i>
      </p>
      <button onClick={() => setCounter((count) => count + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((count) => count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCounter(initValue)}>reset</button>
    </div>
  );
}

export default Counter;
