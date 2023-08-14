import React from "react";
import Todo from "../CRUD/Todo";
import { browserRouter as Router, Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/todo" element={<Todo/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
