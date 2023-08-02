import React from "react";
import "./index.css";
import Properties from "./components/props/Properties";

const App = () => {
  const alertFunction = () => {
    alert("you have scored");
  };
  return (
    <div>
      <h1>react property practice </h1>
      <Properties
        buttonClick={alertFunction}
        title={"take a shot!"}
        style={{ backgroundColor: "red" }}
      />
    </div>
  );
};

export default App;
