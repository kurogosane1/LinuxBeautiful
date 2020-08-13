import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/Laptop">Laptop</NavLink>
      <NavLink to="/Tablet">iTablet</NavLink>
      <NavLink to="/AllinOne">iDeep</NavLink>
      <NavLink to="/Login">Sign In</NavLink>
    </nav>
  );
}
