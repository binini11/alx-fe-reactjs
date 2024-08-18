import React from "react";
import {
  Nav,
  NavLogo,
  Bars,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./Navbar/NavbarElements";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Logo</NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle={{ color: "black" }}>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle={{ color: "black" }}>
            About
          </NavLink>
          <NavLink to="/services" activeStyle={{ color: "black" }}>
            Services
          </NavLink>
          <NavLink to="/contact" activeStyle={{ color: "black" }}>
            Contact
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
