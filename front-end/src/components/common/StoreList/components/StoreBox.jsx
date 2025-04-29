import React from "react";
import * as S from "./StoreBox.styles";
import { useNavigate, useParams } from "react-router-dom";
import { FlexOnly, Font } from "@assets/styles/CommonStyle";
import { IoIosStar } from "react-icons/io";
import useDeleteMyDibs from "@components/common/StoreList/hooks/useDeleteMyDibs";
import CancelIconBtn from "@components/common/Button/icon/CancelIconBtn";
import Image from "@components/common/Image/Image";
import { COLORS } from "@constants/style";
import Loading from "@components/common/Loading/Loading";

function StoreBox({ storeInfo }) {
  const { deleteDibs, isDibsPage, isDeleting } = useDeleteMyDibs();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  if (isDeleting) {
    return <Loading />;
  }
  return (
    <S.StoreOuter onClick={() => navigate(`/stores/${categoryId || "all"}/${storeInfo?.storeId}`)}>
      <Image src={storeInfo?.storeLogoImage} width={"9.5rem"} height={"9.5rem"} />
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
        <FlexOnly justify={"space-between"}>
          <Font size={"small"} color={COLORS.FONT.SUB}>
            {storeInfo?.minDeliveryPrice}원 이상 배달
          </Font>
          <S.OperationHourWrap>
            <Font size={"small"} color={COLORS.FONT.SUB}>
              {storeInfo?.operationHour}
            </Font>
          </S.OperationHourWrap>
        </FlexOnly>
      </S.StoreInfoWrap>
      {isDibsPage && (
        <CancelIconBtn
          top={"0.5rem"}
          right={"0.6rem"}
          onClick={(e) => {
            e.stopPropagation();
            deleteDibs(storeInfo.storeId);
          }}
        />
      )}
    </S.StoreOuter>
  );
}

export default React.memo(StoreBox);
