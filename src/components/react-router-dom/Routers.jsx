import React, { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FetchData from "../lifecycle/FetchData";
// import ExerciseApi from "../lifecycle/ExerciseApi";
import Todo from "../CRUD/Todo";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Form from "../React-forms/Form";
import About from "./pages/About";

// resolve the useContext hook and understand the basic

export const AppContext = createContext();
const Routers = () => {
  const [username, setUsername] = useState("Mpho");
  const client = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={client}>
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Form />} />
            {/* <Route path="/fetchApi" element={<FetchData />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/todo" element={<Todo />} />
            {/* <Route path="/todo" element={<ExerciseApi />} /> */}
          </Routes>
        </Router>
      </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
};

export default Routers;
