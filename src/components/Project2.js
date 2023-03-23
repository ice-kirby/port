import React from "react";
import { Link } from "react-router-dom";

const Project2 = () => {
  return (
    <div className="Project">
      <div className="projects">
        <div>
          <Link to="/whatClothes">
            <div className="pro-pic">
              <img src="../medias/what.png" alt="" />
            </div>
          </Link>

          <p>&lt; 오늘 뭐 입을까? &gt;</p>
          <div>
            프로젝트 소개 : 오늘 입고 나갈 옷과 모자를 정할 수 있다. 외출복을
            확정하면 현재 기온과 적절히 맞는 차림인지 체크하고, 기온에 맞는 옷을
            추천해준다.
          </div>
          <div>활용 기술 : HTML, CSS, JAVASCRIPT</div>
        </div>

        <div>
          <div>
            개발 주요 사항 : <p>▷ 날씨 API를 사용해 현재 기온을 불러와 표시</p>
            <p>▷ 고른 옷의 점수를 계산해 로컬스토리지에 저장</p>
            <p>▷ 옷의 점수와 현재 기온 점수를 비교해 결과 산출</p>
            <p>▷ CDN으로 alert창 스타일, Swiper 버튼 적용</p>
          </div>
          <div>
            회고 :{" "}
            <p>
              ▷ 웹 상에서 구할 수 있는 의상 이미지의 배경 투명 png 파일로 처음
              시도해보았으나, 크기와 위치가 전부 달라서 맞추는 게 어려웠다. 나를
              위해 만드는만큼 내 옷장에 있는 옷들로 그림을 그려 직접 이미지
              파일을 제작했다.
            </p>
            <p>
              ▷ 현재 선택한 아이템들의 점수를 각 1~4점까지 설정해 전부 더하도록
              만들었다. 온도가 계속 달라지는 만큼, 의상 점수는 단발적으로만
              저장되어도 괜찮다고 생각했기에 로컬스토리지를 사용했다. 해당 점수
              저장후에는 결과 페이지로 연결되게 했다. 결과 페이지로 넘어가면
              fetch로 받아온 현재 기온을 의상과 동일하게 점수로 계산하는 함수를
              만들어 저장한 의상 점수와 비교했다.
            </p>
            <p>
              ▷ API를 처음 사용해보았기 때문에 어려운 점이 많았다. 하지만 공식
              문서를 참고하고 카카오API, 서울시API 등 여러 API를 사용해 본 후
              수월하게 완성할 수 있었다.
            </p>
            <p>
              ▷ 원래 컨셉은 마네킹을 이용한 실물 의상이였지만, 그림 이미지로
              제작 후 컨셉을 바꿔 옷장 & 하늘 이미지가 뜨도록 했다.
            </p>
            <p>
              ▷ 반응형 사이트를 만들고자 신경썼다. 모바일 버젼 반응형 대응이
              제일 멋지게 만들어졌다고 생각한다.
            </p>
          </div>
        </div>
      </div>

      {/* 두번째 투두리스트 */}
      <div className="projects">
        <div
          className="pro-pic"
          onClick={() =>
            window.open("https://todoapp-icecreamtruck.netlify.app/")
          }
        >
          <img src="../medias/todoapp.png" alt="" />
        </div>
        <div>
          <p>&lt; Todo-list &gt;</p>
          <div>
            프로젝트 소개 : 계획한 일과 완료한 일을 분리할 수 있는 Todo-app.
            상단의 칸은 현재의 할 일, 하단의 칸은 이미 완료된 칸이다.
          </div>
          <div>활용 기술 : HTML, CSS, JAVASCRIPT, REACT</div>
        </div>
        <div>
          <div>
            개발 주요 사항 :
            <p>▷ 삭제 버튼을 누르면 map함수를 이용해 목록에서 삭제</p>
            <p>
              ▷ 체크박스를 누르면 map함수를 이용해 완료 목록으로 해당 항목 이동
            </p>
            <p>▷ 완료 목록 칸의 filter를 통해 완료 항목을 월별로 확인 가능 </p>
          </div>
          <div>
            회고 :
            <p>
              ▷ 컴포넌트 간의 state 값을 끌어올리고 map 함수를 이용해 원하는
              값만 선택하는 게 어려웠다. 개별적으로 유데미의 자바 스크립트
              인강을 들어 공부하고, 스터디에서 투두앱을 다시 만들어 익숙해지고자
              했다.
            </p>
            <p>
              ▷ 아이스크림 트럭 컨셉으로 실행 중인 칸은 민트초코, 완료된 칸은
              블루레몬에이드 컨셉으로 제작하였다.
            </p>
            <p>
              ▷ 평소 캘린더 어플을 사용하며 월별로 목록을 확인하고 싶었기 때문에
              input date를 이용해 할 일의 날짜를 기입하고, 완료된 목록에서는
              filter를 통해 해당 월의 할 일을 확인할 수 있도록 만들었다.
            </p>
          </div>
        </div>
      </div>

      {/* 세번째 다이어리 */}
      <div className="projects">
        <div>
          <div
            className="pro-pic"
            onClick={() =>
              window.open("https://mydiary-characters.netlify.app/")
            }
          >
            <img src="../medias/mydiary.png" alt="" />
          </div>

          <p>&lt; My diary &gt;</p>
          <div>
            프로젝트 소개 : "캐릭캐릭체인지" 컨셉으로 제작한 일기장. 저장한
            일기는 왼쪽 버튼의 일기 목록에서 확인 가능하다.
          </div>
          <div>활용 기술 : HTML, SCSS, JAVASCRIPT, REACT</div>
        </div>
        <div>
          <div>
            개발 주요 사항 :
            <p>▷ react-router-dom을 이용해 입력 칸과 일기 목록을 분리</p>
            <p>▷ keyframes으로 마스코트들의 애니메이션 구현</p>
            <p>▷ @mixin으로 scss 활용</p>
            <p>▷ useRef, useEffect 사용으로 최적화 시도</p>
          </div>
          <div>
            회고 :
            <p>
              ▷ 기존 하나의 컴포넌트로 진행했던 프로젝트를 리팩토링하여, 라우터
              돔으로 분리하였다. 파일 구조 분리의 중요성을 깨달았다.
            </p>
            <p>
              ▷ 리액트 Hooks 사용에 어려움을 느껴, mdn 사이트와 블로그를 많이
              참고했다.
            </p>
            <p>
              ▷ CSS에 많은 시간을 들였다. 확실한 컨셉을 잡고 프로젝트를 시작하는
              게 중요하다고 생각했다.
            </p>
            <p>
              ▷ 수정하기 버튼을 처음 구현해보았다. 수정하기 기능을 위해 일기
              목록이 로컬 스토리지에 저장되도록 했다.
            </p>
            <p>▷ @mixin을 사용해 SCSS의 편리함을 깨달았다.</p>
          </div>
        </div>
      </div>

      {/* 모닛 */}
      <div className="projects">
        <div>
          <div
            className="pro-pic"
            onClick={() => window.open("https://monit-cbp.netlify.app/")}
          >
            <img src="../medias/monit.png" alt="" />
          </div>
          <p>&lt; Monit-Mecs &gt;</p>
          <div>
            프로젝트 소개 : SeSAC에서 진행 중인 팀 프로젝트. monit 사이트의
            전체적인 수정을 맡았다.
          </div>
          <div>활용 기술 :HTML, SCSS, JAVASCRIPT, REACT</div>
        </div>
        <div>
          <div>
            개발 주요 사항 :
            <p>▷ 자바스크립트로 구현된 페이지를 React - router로 개편 시도</p>
            <p>▷ key-color 수정 및 추가와 사이트 내 애니메이션 추가</p>
            <p>▷ 젊은 세대를 겨냥한 세련된 이미지와 폰트로 수정</p>
          </div>
          <div>
            회고 :
            <p>
              ▷ 첫 팀 프로젝트였던 만큼, 원활한 협업과 소통을 위해 노력했다.
              매주 2회 이상 회의를 진행했고, 꾸준한 코드리뷰로 서로의 코드를
              이해하고자 했다.
            </p>
            <p>
              ▷ Location 페이지를 구현하며 Google map API를 처음 사용해보았다.
              어려움이 많았지만 검색을 통해 잘 구현할 수 있었다.
            </p>
            <p>
              ▷ 팀 협업을 위해 깃허브와 디스코드, 노션, 피그마를 사용하였다.
              프로젝트 종료 후, 피그마의 우수함을 깨달아 유튜브 강의를 수강하며
              기능을 익혔다.
            </p>
          </div>
        </div>
      </div>

      {/* 포트폴리오 */}
      <div className="projects">
        <div>
          <div className="pro-pic">
            <img src="../medias/port.png" alt="" />
          </div>
          <p>&lt; 포트폴리오 사이트 &gt;</p>
          <div>
            프로젝트 소개 : 리액트를 사용해 만든 포트폴리오. 자기소개용으로
            제작하였다.
          </div>
          <div>활용 기술 : HTML, SCSS, JAVASCRIPT, REACT</div>
        </div>
        <div>
          <div>
            개발 주요 사항 :<p>▷ react-router-dom을 사용해 페이지 제작</p>
            <p>▷ npm 사이트를 통해 애니메이션 구현</p>
            <p>▷ netlify 사이트로 리액트 페이지 동적 배포</p>
          </div>
          <div>
            회고 :
            <p>
              ▷ 다른 이들의 포트폴리오를 참고하며, 나만의 포트폴리오를 만들고자
              노력했다.
            </p>
            <p>
              ▷ 디자인적으로 많은 고민을 해야했다. 애니메이션을 집어넣는다하여,
              다 멋있는 건 아니라는 걸 깨달았다.
            </p>
            <p>
              ▷ 포트폴리오 제작부터 배포까지 스스로 진행하며 많은 것을 얻을 수
              있었다.
            </p>
            <p>Update 2023.03.16</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
