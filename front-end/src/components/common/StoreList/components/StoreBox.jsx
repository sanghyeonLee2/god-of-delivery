import React from "react";
import * as S from "./StoreBoxLayout";
import { useNavigate } from "react-router-dom";
import { FlexOnly, Font } from "../../../../assets/styles/CommonStyle";
import { IoIosStar } from "react-icons/io";
import Image from "components/common/Image/Image";

function StoreBox({ storeInfo }) {
  const navigate = useNavigate();
  return (
    <S.StoreOuter onClick={() => navigate(`/stores/info/${storeInfo?.storeId}`)}>
      <Image src={storeInfo} width={"95px"} height={"95px"} />
      <S.StoreInfoWrap>
        <Font size={"large"}>{storeInfo?.storeName}</Font>
        <FlexOnly>
          <IoIosStar size={17} />
          &nbsp;
          <Font size={"small"} color={"#FFD700"}>
            {storeInfo?.rating}
          </Font>
          &nbsp;|&nbsp;
          <Font size={"small"}>리뷰 {storeInfo?.reviewCnt}</Font>
        </FlexOnly>
        <FlexOnly>
          <Font size={"small"} color={"gray"}>
            {storeInfo?.minDeliveryPrice}원 이상 배달
          </Font>
          <S.AverageTimeWrap>
            <Font size={"small"} color={"gray"}>
              운영시간 : {storeInfo?.operationHour}
            </Font>
          </S.AverageTimeWrap>
        </FlexOnly>
      </S.StoreInfoWrap>
    </S.StoreOuter>
  );
}

export default StoreBox;
