import { useState } from "react";

function Switch() {
  const [bgColor, setbgColor] = useState("");

  function handler(e) {
    setbgColor(e.target.value);
  }

  return (
    <div>
      <h1 className="obj">Color Switcher</h1>
      <select onChange={handler}>
        <option value="">Select Color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="violet">Violet</option>
        <option value="green">Green</option>
      </select>
      <div
        style={{
          background: bgColor,
          width: "200px",
          height: "200px",
          borderRadius: "8px",
          marginTop: "40px",
          marginLeft: "100px",
        }}
      ></div>
    </div>
  );
}

export default Switch;
