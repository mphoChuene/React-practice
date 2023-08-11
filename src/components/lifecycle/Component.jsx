import React, { useState } from "react";

const Component = () => {
  const [showText, setShowText] = useState(false);
  const [text, setText] = useState("");

  const handleClick = () => {
    setShowText(!showText)
  }

  const handleText = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleText} />
      <button onClick={handleClick}>show text</button>
      <div className="display">{showText && text}</div>
    </div>
  );
};

export default Component;
