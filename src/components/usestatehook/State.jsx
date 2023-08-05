import React, { useState } from "react";
import Exercise from "./Exercise";
const State = () => {
  const [color, setColor] = useState("black");
  const [visible, setVisible] = useState(true);

  const handleChange = () => {
    setColor(color === "black" ? "red" : "black");
  };

  const visibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      {/* change the color of the text */}
      {visible && <h2 style={{ color: color }}>hooks practice:</h2>}
      <button onClick={handleChange}>change</button>
      <button onClick={visibility}>hide/show</button>
      <Exercise />
    </div>
  );
};

export default State;
