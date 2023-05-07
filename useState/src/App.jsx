import "./App.css";
import Counter from "./component/Counter";
import Object from "./component/Object";
import Array from "./component/Array";
import Input from "./component/Input";
import Toggle from "./component/Toggle";
import { Routes, Route, Link } from "react-router-dom";
import CounterTwo from "./component/CounterTwo";

function App() {
  return (
    <div className="wrapper">
      <nav className="items">
        <Link to="/" className="item">
          Counter
        </Link>
        <Link to="/Object" className="item">
          Object
        </Link>
        <Link to="/Array" className="item">
          Array
        </Link>
        <Link to="/Input" className="item">
          Inputs
        </Link>
        <Link to="/Toggle" className="item">
          Toggle
        </Link>
        <Link to="/CounterTwo" className="item">
          Counter 2
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/Object" element={<Object />} />
        <Route path="/Array" element={<Array />} />
        <Route path="/Input" element={<Input />} />
        <Route path="/Toggle" element={<Toggle />} />
        <Route path="/CounterTwo" element={<CounterTwo />} />
      </Routes>
    </div>
  );
}

export default App;
