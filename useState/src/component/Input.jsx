import React, { useState } from "react";

function Input() {
  const [text, setText] = useState("");
  function handler(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <h1>Controlled Components</h1>
      <input type="text" value={text} onChange={handler} />
      <p>Input text: {text}</p>
    </div>
  );
}

export default Input;
