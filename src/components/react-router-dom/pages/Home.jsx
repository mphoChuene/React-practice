import React, { createContext, useState } from "react";
import About from "./About";
import Company from "./Company";
import Navbar from "./Navbar";
import Form from "../../React-forms/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const userContext = createContext();
const Home = () => {
  const [username, setUsername] = useState("Mpho");
  return (
    <userContext.Provider value={[ username, setUsername ]}>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/register" element={<Form />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </Router>
      </div>
    </userContext.Provider>
  );
};

export default Home;
