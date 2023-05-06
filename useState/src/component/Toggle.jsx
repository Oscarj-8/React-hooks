import React, { useState } from "react";

function Toggle() {
  const [isVisible, seIsVisible] = useState(false);
  function handler() {
    seIsVisible(!isVisible);
  }
  return (
    <div>
      <h1 className="obj">Toggle Visibility</h1>
      <p>
        Initially, the text should be hidden When the button is clicked, the
        text should become visible if it was hidden, and hidden if it was
        visible. useState is used to manage the visibility of the text.
      </p>
      <button onClick={handler}> Show/Hide Text</button>
      {isVisible && <p>Toggle me!</p>}
    </div>
  );
}
export default Toggle;
