import React, { useState, createContext } from "react";
import Navbar from "../Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";

const UseContext = () => {
  const userContext = createContext();
  const [user, setUser] = useState("Mpho");
  return (
    <userContext.Provider value={user, setUser}>
      <div>
        <Navbar />
        <div className="main">
          <h2>useContext hook: {user} </h2>
        </div>
      </div>
    </userContext.Provider>
  );
};

export default UseContext;
