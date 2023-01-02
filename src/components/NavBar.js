import React from "react";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import "../style/Menu.scss";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Menu />
      <Hamburger />
    </div>
  );
};

export default NavBar;
