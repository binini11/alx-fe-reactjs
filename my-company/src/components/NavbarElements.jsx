import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: orangered;
  height: 85px;
  display: flex;
  justify-content: space-between;
  /* Add other styling properties as needed */
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const Bars = styled(FaBars)`
  display: none; /* Hide on larger screens */
  @media screen and (max-width: 768px) {
    display: block; /* Show on smaller screens */
    cursor: pointer;
  }
`;

export const NavLogo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  margin-left: 20px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  &:hover {
    color: black;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: white;
    color: black;
  }
`;
