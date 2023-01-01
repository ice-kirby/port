import React from "react";
import { Link } from "react-router-dom";
import "../style/Project.scss";

const Project = () => {
  return (
    <div className="Project">
      <div className="Pline1">
        <Link to="/whatClothes">
          <div className="Prob">
            <figure className="PRO proOne">
              <img src="../medias/what.png" alt="" />
              <figcaption>
                <em>오늘 뭐 입어?</em>
              </figcaption>
            </figure>
          </div>
        </Link>
        <div className="ProWord">
          <p>
            오늘 입고 나갈 옷과 모자를 정해보자. 옷을 확정하면 현재 기온과
            적절히 맞는 차림인지 체크해주고 기온과 맞는 옷을 추천해준다.
          </p>
          <br />
          <br />
          <span>사용기술 : </span>HTML, CSS, JAVASCRIPT
          <br />
          <br />
          <span>개발사항 </span>: 날씨 API를 사용해 현재 기온을 불러왔다. 고른
          옷의 점수를 계산하여 로컬스토리지에 저장 후 날씨 점수를 산정해 둘을
          비교하게 만들었다.
        </div>
      </div>

      <div className="Pline2">
        <div
          className="Prob"
          onClick={() =>
            window.open("https://todoapp-icecreamtruck.netlify.app/")
          }
        >
          <figure className="PRO proTwo">
            <img src="../medias/todoapp.png" alt="" />
            <figcaption>
              <em>Todo-List</em>
            </figcaption>
          </figure>
        </div>
        <div className="ProWord">
          <p>
            아이스크림 트럭 컨셉으로 제작한 Todo-app. 민트초코는 현재의 할 일,
            블루레몬에이드는 완료된 칸이다.
          </p>
          <br />
          <br />
          <span>사용기술 : </span>HTML, CSS, JAVASCRIPT, REACT
          <br />
          <br />
          <span>개발사항 : </span>map을 이용해 할 일 목록의 완료 처리와 삭제
          버튼을 작동시켰다. 완료 목록의 filter로 목록을 월별로 확인할 수 있다.
        </div>
      </div>

      <div className="Pline3">
        <div
          className="Prob"
          onClick={() => window.open("https://mydiary-characters.netlify.app/")}
        >
          <figure className="PRO proThree">
            <img src="../medias/mydiary.png" alt="" />
            <figcaption>
              <em>My diary</em>
            </figcaption>
          </figure>
        </div>
        <div className="ProWord">
          <p>
            "캐릭캐릭체인지" 컨셉으로 제작한 일기장. 저장한 일기는 왼쪽 버튼의
            일기 목록에서 확인 가능하다.
          </p>
          <br />
          <br />
          <span>사용기술 : </span>HTML, SCSS, JAVASCRIPT, REACT
          <br />
          <br />
          <span>개발사항 : </span>router를 이용해 일기 입력 칸과 일기 목록을
          분리했다. css 애니메이션으로 "캐릭캐릭체인지"의 마스코트들이
          움직이도록 만들었다.
        </div>
      </div>

      <div className="Pline4">
        <div className="Prob">
          <figure className="PRO proFour">
            <img src="../medias/ing.png" alt="" />
            <figcaption>
              <em>Monit</em>
            </figcaption>
          </figure>
        </div>
        <div className="ProWord">
          <p>
            SeSAC에서 진행 중인 팀 프로젝트. monit 사이트의 전체적인 수정을
            맡았다.
          </p>
          <br />
          <br />
          <span>사용기술 : </span>HTML, SCSS, JAVASCRIPT, REACT
          <br />
          <br />
          <span>개발사항 : </span>기존 자바스크립트로 짜여진 사이트를 React -
          router로 개편하고 있다. key-color 수정 및 추가하고, 사이트 내
          애니메이션을 추가할 예정이다.
        </div>
      </div>
    </div>
  );
};

export default Project;
