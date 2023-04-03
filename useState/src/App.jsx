import { useState } from 'react'
import './App.css'

function App() {
  let initValue = 0;
  const [count, setCount] = useState(initValue)
  return (
    <>
    <h1>
      Counter {count}
    </h1>
    <p><i>This counter's state is managed by using a react hook called useState hook, which allows us to initialize default/inital value and then takes another argument as a setter function, which used for altering the state based up on some kind of event.</i></p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <button onClick={() => setCount(initValue)}>Reset</button>

    </>
  )
}

export default App
