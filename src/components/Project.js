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
                <p>
                  상하의와 모자를 고르고, 현재 기온과 적절하게 맞는 차림인지
                  체크한다.
                </p>
              </figcaption>
            </figure>
          </div>
        </Link>

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
              <p>
                아이스크림 트럭 컨셉으로 제작한 Todo-app. 완료된 목록은 필터를
                통해 월 별로 확인할 수 있다.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="Pline2">
        <div
          className="Prob"
          onClick={() => window.open("https://mydiary-characters.netlify.app/")}
        >
          <figure className="PRO proThree">
            <img src="../medias/mydiary.png" alt="" />
            <figcaption>
              <em>My diary</em>
              <p>
                "캐릭캐릭 체인지" 컨셉으로 제작한 일기장. 작성된 일기는 일기
                목록에서 확인 가능하다.
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="Prob">
          <figure className="PRO proFour">
            <img src="../medias/ing.png" alt="" />
            <figcaption>
              <em>Monit</em>
              <p>팀 프로젝트로 진행하고 있다.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Project;
