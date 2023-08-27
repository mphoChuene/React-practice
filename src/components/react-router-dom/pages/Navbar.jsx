import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" style={{ paddingRight: "15px" }}>
        Home
      </Link>
      <Link to="/company" style={{ paddingRight: "15px" }}>
        company
      </Link>
      <Link to="/register">register</Link>
    </div>
  );
};

export default Navbar;
