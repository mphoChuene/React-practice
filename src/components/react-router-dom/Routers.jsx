import React,{useState,createContext} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchData from "../lifecycle/FetchData";
import ExerciseApi from "../lifecycle/ExerciseApi";
import Todo from "../CRUD/Todo";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

export const AppContext = context
const Routers = () => {
  const [username,setUsername]=useState('')
  return (
    <div>
      <AppContext.Provider value={{username,setUsername}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fetchApi" element={<FetchData />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
};

export default Routers;
