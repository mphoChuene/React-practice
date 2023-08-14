import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" style={{ padding: "5px" }}>
        Home
      </Link>
      <Link to="/todo" style={{ padding: "5px" }}>
        TodoList
      </Link>
      <Link to="/API" style={{ padding: "5px" }}>
        API
      </Link>
    </div>
  );
};

export default Navbar;
