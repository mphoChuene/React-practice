import React from "react";
import "./index.css";
// import Properties from "./components/props/Properties";
// import Operators from "./components/ternary-operators/Operators";
import Exercise from "./components/ternary-operators/Exercise";
import State from "./components/usestatehook/State";

const App = () => {
  const alertFunction = () => {
    alert("you have scored");
  };
  return (
    <div>
      <State />
      {/* <Operators/> */}
      {/* <h1>react property practice </h1> */}
      {/* <Properties
        buttonClick={alertFunction}
        title={"take a shot!"}
        style={{ backgroundColor: "red" }}
      /> */}
    </div>
  );
};

export default App;
