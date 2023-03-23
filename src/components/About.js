import React from "react";
import "../style/About.scss";
import { AiFillCaretRight } from "react-icons/ai";

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
        {/* <div className="Aleft2">
          <p>생년월일 : 960229</p>
          <p>별자리 : 물고기자리</p>
          <p>취미 : 소설 읽기, 게임하기</p>
          <p>mbti : 설문조사 응하지 않는 성격이라 mbti 모름</p>
        </div> */}
      </div>
      <div className="Aright">
        <div className="Abar"></div>
        <div className="Aword ArigntOne">
          2017.08 ~ 2019.07
          <br />
          <span className="Aimage">이미지프레임</span> 근무
          <p>블랑시아팀 사원</p>
          <p className="Aword-p">
            <AiFillCaretRight />
            작가 컨택, 작품 관리, 이벤트 기획, 사이트 & SNS 관리
          </p>
        </div>
        <div className="Aword ArightTwo">
          2020.07 ~ 2022.05
          <br />
          <span className="AJoara">조아라</span> 근무
          <p>퍼블리싱팀 사원</p>
          <p className="Aword-p">
            <AiFillCaretRight />
            EPUB 파일 제작, 연재 작품 유통, 공모전 작품 검토{" "}
          </p>
        </div>
        <div className="Aword ArightThree">
          2022.10 ~ 2023.01
          <br />
          <span className="Asesac">청년취업사관학교 SeSAC </span>
          <p>기업연계형 프론트엔드 실무 프로젝트 과정 수강</p>
          <p className="Aword-p">
            <AiFillCaretRight />
            HTML, CSS, JS, TS, React 등 프론트엔드 개발 기술 학습 <br />
            <AiFillCaretRight />
            스터디와 인터넷 강의를 통해 매일 개인 추가 학습 진행
            <br />
            <AiFillCaretRight />
            (주)모닛 홈페이지 리뉴얼 팀 프로젝트 개발 참여
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
