import React from "react";
import * as S from "./StoreHeader.styles";
import StarRatings from "react-star-ratings/build/star-ratings";
import { FlexOnly, Font } from "@assets/styles/CommonStyle";
import IconBtn from "@components/common/Button/icon/IconBtn";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDibs } from "@pages/user/StorePage/hooks/useDibs";

function StoreHeader({ storeHeader, storeId }) {
  const handleToggleDib = useDibs(storeId);
  return (
    <S.StoreHeaderWrap>
      <Font size={"x-large"}>{storeHeader?.storeName}</Font>
      <FlexOnly justify="center">
        <StarRatings rating={storeHeader?.rating} starRatedColor={"gold"} starDimension={"3rem"} />
        &nbsp;&nbsp;
        <Font>{storeHeader?.rating.toFixed(1)}</Font>
      </FlexOnly>
      <S.ReviewWrap>
        <FlexOnly>
          <IconBtn onClick={() => handleToggleDib.mutate(storeHeader?.isDib)}>
            {storeHeader?.isDib ? (
              <MdFavorite size={19} color={"red"} />
            ) : (
              <MdFavoriteBorder size={19} color={"red"} />
            )}
          </IconBtn>
          <Font>{storeHeader?.dibs}</Font>
        </FlexOnly>
        <Font>리뷰 수 {storeHeader?.reviewCnt}</Font>
        <Font>사장님 댓글 수 {storeHeader?.ownerReviewCnt}</Font>
      </S.ReviewWrap>
    </S.StoreHeaderWrap>
  );
}

export default StoreHeader;
