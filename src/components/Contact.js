import React from "react";
import "../style/Contact.scss";
import Typing from "react-kr-typing-anim";

const Contact = () => {
  return (
    <div className="Contact">
      <p>velog : </p>
      <Typing
        className="ConWord"
        onDone={function noRefCheck() {}}
        preDelay={60}
        str="https://velog.io/@gongwillson"
      />
      <p>mail : </p>
      <Typing
        className="ConWord"
        onDone={function noRefCheck() {}}
        preDelay={60}
        str="gongwillson3@gmail.com"
      />
      <p>git : </p>
    </div>
  );
};

export default Contact;
