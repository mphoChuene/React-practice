import React from "react";
import "./index.css";
// import Properties from "./components/props/Properties";
// import Operators from "./components/ternary-operators/Operators";
// import Exercise from "./components/ternary-operators/Exercise";
// import State from "./components/usestatehook/State";
// import Todo from "./components/CRUD/Todo";
// import Component from "./components/lifecycle/Component";
// import FetchData from "./components/lifecycle/FetchData";
import ExerciseApi from "./components/lifecycle/ExerciseApi";
import UseContext from "./components/react-router-dom/pages/UseContext";
// import Routers from "./components/react-router-dom/Routers";

const App = () => {
  return (
    <div>
      <UseContext />
      {/* <FetchData /> */}
      {/* <Routers /> */}
      {/* <ExerciseApi /> */}
      {/* <Component/> */}
      {/* <Todo/> */}
      {/* <State /> */}
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
