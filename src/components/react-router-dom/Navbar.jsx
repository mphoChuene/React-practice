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
      <Link to="/register" style={{ padding: "5px" }}>
        register
      </Link>
      {/* <Link to="/fetchApi" style={{ padding: "5px" }}>
        API
      </Link> */}
      <Link to="/about" style={{ padding: "5px" }}>
        About
      </Link>
    </div>
  );
};

export default Navbar;
