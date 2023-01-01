import React from "react";
import "../style/Contact.scss";
import Typing from "react-kr-typing-anim";

const Contact = () => {
  return (
    <div className="Contact">
      <img src="../medias/monitor2.jpg" alt="" />

      <div className="ConAll">
        <span>velog :</span>
        <div>
          <Typing
            onDone={function noRefCheck() {}}
            preDelay={0}
            str="https://velog.io/@gongwillson"
            onClick={() => window.open("https://velog.io/@gongwillson")}
            className="ContactWord"
          />
        </div>
        <br />
        <div>
          <span>mail :</span>
          <Typing
            onDone={function noRefCheck() {}}
            preDelay={0}
            str="gongwillson3@gmail.com"
            onClick={() =>
              window.open("https://www.google.com/intl/ko/gmail/about/")
            }
            className="ContactWord"
          />
        </div>
        <br />
        <div>
          <span>git :</span>
          <Typing
            onDone={function noRefCheck() {}}
            preDelay={0}
            str="https://github.com/ice-kirby"
            onClick={() => window.open("https://github.com/ice-kirby")}
            className="ContactWord"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
