import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "orangered", padding: "10px" }}>
      <Link
        to="/"
        style={{ color: "white", textDecoration: "none", marginRight: "20px" }}
      >
        Logo
      </Link>
      <Link
        to="/"
        style={{ color: "white", textDecoration: "none", marginRight: "20px" }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{ color: "white", textDecoration: "none", marginRight: "20px" }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{ color: "white", textDecoration: "none", marginRight: "20px" }}
      >
        Services
      </Link>
      <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
