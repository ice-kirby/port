import React, { useState } from "react";
import NavLinks from "./NavLinks";
import "../style/Menu.scss";
import { FaHamburger, FaChevronUp } from "react-icons/fa";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FaHamburger
      className="miniHam"
      size="30px"
      color="#9F9F9F"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <FaChevronUp
      className="miniHam"
      size="30px"
      color="#9F9F9F"
      onClick={() => setOpen(!open)}
    />
  );

  const closeHamMenu = () => setOpen(false);

  return (
    <nav className="Hamburger">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isHam={true} closeHamMenu={closeHamMenu} />}
    </nav>
  );
};

export default Hamburger;
