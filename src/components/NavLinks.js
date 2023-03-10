import React from "react";
import { Link } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul>
      <li onClick={() => props.isHam && props.closeHamMenu()}>
        <Link to="/">π‘</Link>
      </li>
      <li onClick={() => props.isHam && props.closeHamMenu()}>
        <Link to="/about">μ΅λμ.about</Link>
      </li>
      <li onClick={() => props.isHam && props.closeHamMenu()}>
        <Link to="/plan">.planπ§­</Link>
      </li>
      <li onClick={() => props.isHam && props.closeHamMenu()}>
        <Link to="/project">.project π</Link>
      </li>
      <li onClick={() => props.isHam && props.closeHamMenu()}>
        <Link to="/contact">.contact π</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
