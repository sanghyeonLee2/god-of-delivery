import React from "react";
import { CommonPageWrap, Font } from "@assets/styles/CommonStyle";
import Title from "@components/common/Title/Title";
import { Link } from "react-router-dom";

function OwnerHomePage() {
  return (
    <CommonPageWrap>
      <Title text={"사장님 페이지"} size={"x-large"} />
      <ul>
        <li>
          <Link to={"store"}>
            <Font>가게 정보 관리</Font>
          </Link>
        </li>
        <li>
          <Link to={"menus"}>
            <Font>메뉴 정보 관리</Font>
          </Link>
        </li>
        <li>
          <Link to={"reviews"}>
            <Font>가게 리뷰 관리</Font>
          </Link>
        </li>
      </ul>
    </CommonPageWrap>
  );
}

export default OwnerHomePage;
