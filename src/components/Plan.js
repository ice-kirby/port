import React from "react";
import "../style/Plan.scss";

const Plan = () => {
  return (
    <div className="Plan">
      <div className="PlOne">
        <span>main</span>
        <div className="PlOne-main">
          <div className="PlOne-logo">
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />

            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />

            <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white" />

            <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white" />

            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" />
          </div>
          keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.
          <br />
          if문, switch문 삼항연산자 등을 이용한 조건문과 for문, for each문,
          while문 등의 반복문을 사용합니다. <br />
          react-router-dom을 사용한 페이지 이동이 가능합니다.
        </div>
        <span>sub</span>
        <div className="PlOne-sub">
          <div className="PlOne-logo">
            <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white" />

            <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white" />

            <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />

            <img src="http://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" />
          </div>
          Github을 통한 레포지토리 관리합니다.
          <br />
          Git pull push commit 등 명령어 사용이 익숙합니다.
          <br />
          Slack과 Notion을 활용해 협업이 가능합니다.
        </div>
      </div>
      <div className="PlTwo">
        <div className="Plword-height">
          <div className="Plword joOne">
            최나은의 장점
            <div className="joOne-fir">#기획</div>{" "}
            <div className="joOne-sec">#협업</div>
            <div className="joOne-thi">#소통</div>
          </div>
        </div>
        <div className="Plword joTwo">
          <div>
            출판사 E-book PD로 삼 년간 일하며{" "}
            <span className="Sone">계획과 행동의 중요성</span>을 잘 알고
            있습니다. 이 경험이 개발자로서도 좋은 결과를 만들어주리라 믿습니다.
          </div>
          <br />
          <div>
            소비자 친화적인 기능을 구현하고 싶습니다.
            <br />
            개선이 필요한 부분을 막연히 기다리기보다{" "}
            <span className="Stwo">직접 해결책을 제시</span>할 수 있는 개발자가
            되겠습니다.
          </div>
          <div>
            <br />
            <span className="SThree">상상력이 담긴 코드</span>로 사용자에게
            다가가겠습니다. 감사합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
