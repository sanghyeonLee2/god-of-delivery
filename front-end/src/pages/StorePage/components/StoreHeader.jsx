import React from 'react';
import {ReviewWrap, StoreHeaderWrap} from "./StoreHeaderLayout";
import StarRatings from "react-star-ratings/build/star-ratings";
import {Font} from "../../../assets/styles/CommonStyle";
import IconBtn from "../../../components/common/Button/icon/IconBtn";
import favorite from "../../../assets/img/favorite.png";
import favoriteFill from "../../../assets/img/favorite_fill.png";
import {useFavorite} from "../../../hooks/useFavorite";

function StoreHeader({storeHeader, storeId}) {
    const [handleToggleDip, dipState] = useFavorite("dip", {isDip: storeHeader?.isDip, dips: storeHeader?.dips})
    return (
        <StoreHeaderWrap>
            <Font size={"x-large"}>{storeHeader?.storeName}</Font>
            <div>
                <StarRatings
                    rating={storeHeader?.rating}
                    starRatedColor={"gold"}
                    starDimension={"30px"}
                />
                &nbsp;&nbsp;
                <span>{storeHeader?.rating}</span>
            </div>
            <ReviewWrap>
                <IconBtn
                    src={dipState?.isDip ? favoriteFill : favorite}
                    alt={dipState?.isDip ? favoriteFill : favorite}
                    width={19}
                    onClick={() => handleToggleDip.mutate(storeId)} // 클릭 시 찜 상태 변경
                />
                &nbsp;<Font>{dipState?.dips}</Font>&nbsp;|&nbsp;
                <Font>리뷰 수 {storeHeader?.reviewCnt}</Font>&nbsp;|&nbsp;
                <Font>사장님 댓글 수 {storeHeader?.ownerReviewCnt}</Font>
            </ReviewWrap>
        </StoreHeaderWrap>
    );
}

export default StoreHeader;
