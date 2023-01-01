import React from "react";
import { Link } from "react-router-dom";
import "../style/Menu.scss";

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="/">🏡</Link>
        </li>
        <li>
          <Link to="/about">최나은.about</Link>
        </li>
        <li>
          <Link to="/plan">.plan🧭</Link>
        </li>
        <li>
          <Link to="/project">.project 💌</Link>
        </li>
        <li>
          <Link to="/contact">.contact 📞</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
