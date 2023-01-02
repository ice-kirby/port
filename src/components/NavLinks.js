import React from "react";
import { Link } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul>
      <li onClick={() => props.isHam && props.closeHamMenu()}>
        <Link to="/">🏡</Link>
      </li>
      <li onClick={() => props.isHam && props.closeHamMenu()}>
        <Link to="/about">최나은.about</Link>
      </li>
      <li onClick={() => props.isHam && props.closeHamMenu()}>
        <Link to="/plan">.plan🧭</Link>
      </li>
      <li onClick={() => props.isHam && props.closeHamMenu()}>
        <Link to="/project">.project 💌</Link>
      </li>
      <li onClick={() => props.isHam && props.closeHamMenu()}>
        <Link to="/contact">.contact 📞</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
