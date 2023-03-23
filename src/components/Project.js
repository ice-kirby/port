import React from "react";
import "../style/Project.scss";
import { projectdata } from "./data/projectdata";

const Project = () => {
  return (
    <div className="Project">
      {projectdata.map((item) => (
        <div className="Pline" key={Math.random()}>
          <div className="PlineHead">
            <div className="ProImg">
              <img src={item.img} alt="" />
              <button onClick={() => window.open(item.link)}>바로가기</button>
            </div>
            <div className="ProWord">
              <div className="ProTitle"> &lt; {item.title} &gt;</div>
              <div className="ProIntro">
                {" "}
                <span>프로젝트 소개</span> :{item.intro}
              </div>
              <div className="ProSkill">
                {" "}
                <span>활용 기술</span> : {item.skill}
              </div>
              <div className="ProAcc">
                <span>개발 주요 사항</span> :
                {item.account.map((it) => (
                  <React.Fragment key={Math.random()}>
                    <p>▷{it}</p>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="PlineBody">
            <div className="ProRemem">
              <span>회고</span> :
              {item.remembrance.map((it) => (
                <React.Fragment key={Math.random()}>
                  <p>▶{it}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
