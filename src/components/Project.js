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
          <p>&lt; 오늘 뭐 입어? &gt;</p>
          <br />
          <p>
            - 프로젝트 소개 : 오늘 입고 나갈 옷과 모자를 정할 수 있다. 옷을
            확정하면 현재 기온과 적절히 맞는 차림인지 체크하고, 기온에 맞는 옷을
            추천해준다.
          </p>
          <br />
          <span>- 활용 기술 : </span>HTML, CSS, JAVASCRIPT
          <br />
          <br />
          <div className="ProWord-box">
            <span>- 개발 주요 사항 </span>
            <div>
              <p>▷ 날씨 API를 사용해 현재 기온을 불러와 표시</p>
              <p>▷ 고른 옷의 점수를 계산해 로컬스토리지에 저장</p>
              <p>▷ 옷의 점수와 현재 기온 점수를 비교해 결과 산출</p>
              <p>▷ CDN으로 alert창 스타일 적용</p>
            </div>
          </div>
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
          <p>&lt; Todo-list &gt;</p>
          <br />
          <p>
            - 프로젝트 소개 : 아이스크림 트럭 컨셉으로 제작한 Todo-app.
            민트초코는 현재의 할 일, 블루레몬에이드는 완료된 칸이다.
          </p>
          <br />
          <span>- 활용 기술 : </span>HTML, CSS, JAVASCRIPT, REACT
          <br />
          <br />
          <div className="ProWord-box">
            <span>- 개발 주요 사항 </span>
            <div>
              <p>▷ 삭제 버튼을 누르면 map함수를 이용해 목록에서 삭제</p>
              <p>
                ▷ 체크박스를 누르면 map함수를 이용해 완료 목록으로 해당 항목
                이동
              </p>
              <p>
                ▷ 완료 목록 칸의 filter를 통해 완료 항목을 월별로 확인 가능{" "}
              </p>
            </div>
          </div>
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
          <p>&lt; MY diary &gt;</p>
          <br />
          <p>
            - 프로젝트 소개 : "캐릭캐릭체인지" 컨셉으로 제작한 일기장. 저장한
            일기는 왼쪽 버튼의 일기 목록에서 확인 가능하다.
          </p>
          <br />
          <span>- 활용 기술 : </span>HTML, SCSS, JAVASCRIPT, REACT
          <br />
          <br />
          <div className="ProWord-box">
            <span>- 개발 주요 사항 </span>
            <div>
              <p>▷ react-router-dom을 이용해 입력 칸과 일기 목록을 분리</p>
              <p>▷ keyframes으로 마스코트들의 애니메이션 구현</p>
              <p>▷ @mixin으로 scss 활용</p>
              <p>▷ useEffect 사용으로 최적화 시도</p>
            </div>
          </div>
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
          <p>&lt; Monit-Mecs &gt;</p>
          <br />
          <p>
            - 프로젝트 소개 : SeSAC에서 진행 중인 팀 프로젝트. monit 사이트의
            전체적인 수정을 맡았다.
          </p>
          <br />
          <span>- 활용 기술 : </span>HTML, SCSS, JAVASCRIPT, REACT
          <br />
          <br />
          <div className="ProWord-box">
            <span>- 개발 주요 사항 </span>
            <div>
              <p>▷ 자바스크립트로 구현된 페이지를 React - router로 개편 시도</p>
              <p>▷ key-color 수정 및 추가와 사이트 내 애니메이션 추가</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
