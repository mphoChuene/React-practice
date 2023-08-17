import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Navbar from "./Navbar";
import Company from "./Company";

export const HomeContext = createContext();
const Home = () => {
  const [username, setUsername] = useState("Mpho");
  return (
    <HomeContext.Provider value={[ username, setUsername] }>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Company />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
