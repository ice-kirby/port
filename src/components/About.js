import React from "react";
import "../style/About.scss";

const About = () => {
  return (
    <div className="About">
      <div className="Aleft">
        <div className="Aphoto">
          <img src="../medias/naeun.jpg" className="naeun" alt="" />
          <img src="../medias/naeun-1.jpg" className="naeun1" alt="" />
        </div>

        <div className="Aleft1">
          안녕하세요
          <br />
          신입 프론트엔드 개발자 최나은입니다.
        </div>
        <p>생년월일 : 960229</p>
        <p>별자리 : 물병자리</p>
        <p>취미 : 소설 읽기, 게임하기</p>
        <p>mbti : 설문조사 응하지 않는 성격이라 mbti 모름</p>
      </div>
      <div className="Aright">
        <div className="Abar"></div>
        <div className="Aword ArigntOne">
          2017.08 ~ 2019.07
          <br />
          <span className="Aimage">이미지프레임</span> 근무
        </div>
        <div className="Aword ArightTwo">
          2020.07 ~ 2022.05
          <br />
          <span className="AJoara">조아라</span> 근무
        </div>
        <div className="Aword ArightThree">
          2022.10 ~ ing
          <br />
          <span className="Asesac">청년취업사관학교 SeSAC </span>시작
        </div>
      </div>
    </div>
  );
};

export default About;
