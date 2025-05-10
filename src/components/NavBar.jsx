import React from "react";
import { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";
import NumResult from "./NumResult";

const NavBar = ({children}) => {
    
  return (
    <nav className="nav-bar">
      {children}
    </nav>
  );
};

export default NavBar;
 