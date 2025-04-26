import React from "react";
import { FixedTextInterval, Font, VerticalSpace } from "@assets/styles/CommonStyle";
import { TabWrap } from "@pages/user/StorePage/StorePage.styles";
import Title from "@components/common/Title/Title";

function StoreInfo({ storeInfo }) {
  return (
    <>
      <TabWrap>
        <Title size={"x-large"} text={"가게정보"} />
        <Font size={"large"}>{storeInfo?.storeName}</Font>
        <FixedTextInterval>
          <li>
            <Font>상호명</Font>
            <Font>{storeInfo?.storeName}</Font>
          </li>
          <li>
            <Font>운영시간</Font>
            <Font>{storeInfo?.hours}</Font>
          </li>
          <li>
            <Font>휴무일</Font>
            <Font>{storeInfo?.dayOff}</Font>
          </li>
          <li>
            <Font>전화번호</Font>
            <Font>{storeInfo?.phoneNumber}</Font>
          </li>
          <li>
            <Font>배달지역</Font>
            <Font>{storeInfo?.area}</Font>
          </li>
        </FixedTextInterval>
      </TabWrap>
      <VerticalSpace />
      <TabWrap>
        <Font size={"large"}>가게소개</Font>
        <Font>{storeInfo?.introduction}</Font>
      </TabWrap>
      <VerticalSpace />
      <TabWrap>
        <Font size={"large"}>사업자 정보</Font>
        <FixedTextInterval>
          <li>
            <Font>대표자명</Font>
            <Font>{storeInfo?.ownerName}</Font>
          </li>
          <li>
            <Font>상호명</Font>
            <Font>{storeInfo?.tradeName}</Font>
          </li>
          <li>
            <Font>등록번호</Font>
            <Font>{storeInfo?.businessNum}</Font>
          </li>
        </FixedTextInterval>
      </TabWrap>
      <VerticalSpace />
    </>
  );
}

export default StoreInfo;
