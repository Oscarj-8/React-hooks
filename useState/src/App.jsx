import "./App.css";
import Counter from "./component/Counter";
import Object from "./component/Object";
import Array from "./component/Array";
import Input from "./component/Input";
import { Routes, Route, Link } from "react-router-dom";

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
      </nav>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/Object" element={<Object />} />
        <Route path="/Array" element={<Array />} />
        <Route path="/Input" element={<Input />} />
      </Routes>
    </div>
  );
}

export default App;
