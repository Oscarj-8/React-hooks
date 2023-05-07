import { useState } from "react";

function CounterTwo() {
  const [text, setText] = useState("");
  function handler(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <h1 className="obj"> Character Counter</h1>
      <p>
        This is a simple Character Counter component that allows users to type
        in text and displays the number of characters in real-time. useState is
        used to manage the state of the textarea and used JS property called
        .length to count number of words written(also counts whitespaces).
      </p>
      <textarea value={text} onChange={handler} />
      <p>Character Count: {text.length}</p>
    </div>
  );
}

export default CounterTwo;
