import React from "react";

const NavLinks = () => {
  return (
    <div>
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

export default NavLinks;
