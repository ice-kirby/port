import React from "react";
import "../style/Home.scss";
import Word from "./Word";

import "../style/Word.scss";

const Home = () => {
  return (
    <>
      <div className="outer">
        <div className="first">
          <img src="../medias/computer2.jpg" alt="" />
          <Word />
        </div>
      </div>
    </>
  );
};

export default Home;
