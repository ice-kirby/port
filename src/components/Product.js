import React from "react";
import "../style/Product.scss";

const Product = () => {
  return (
    <div className="Product">
      <div className="Pd-left">
        <div className="left-one">기획</div>
        <div className="left-two">협업</div>
        <div className="left-three">소통</div>
      </div>
      <div className="Pd-right">
        <div className="Pd-wd">기술 스택</div>
        <div className="right-one">
          <img src="../medias/Html.png" />
          <img src="../medias/Css.png" />
          <img src="../medias/JavaS.png" />
          <img src="../medias/React.png" />
        </div>
        <div className="right-two">
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

export default Product;
