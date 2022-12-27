import React from "react";
import Typing, { TypingMultiline } from "react-kr-typing-anim";
import "../style/Word.scss";

const Word = () => {
  return (
    <div className="me">
      <TypingMultiline
        ContainerTag="div"
        className="OneWord"
        cursor
        onDone={function noRefCheck() {}}
        preDelay={800}
        strs={["개발자로 향하는 성장물의 주인공", "최나은"]}
      />
    </div>
  );
};

export default Word;
