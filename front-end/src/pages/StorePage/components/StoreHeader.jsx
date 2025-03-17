import React from 'react';
import {ReviewWrap, StoreHeaderWrap} from "./StoreHeaderLayout";
import StarRatings from "react-star-ratings/build/star-ratings";
import {Font} from "../../../assets/styles/CommonStyle";
import {useDibs} from "../../../hooks/useDibs";
import IconBtn from "../../../components/common/Button/icon/IconBtn";
import favoriteFill from "../../../assets/img/favorite_fill.png";
import favorite from "../../../assets/img/favorite.png";

function StoreHeader({storeHeader, storeId}) {
    const {handleToggleDib, isLoading} = useDibs()
    return (
        <StoreHeaderWrap>
            <Font size={"x-large"}>{storeHeader?.storeName}</Font>
            <div>
                <StarRatings rating={storeHeader?.rating} starRatedColor={"gold"} starDimension={"30px"}/>
                &nbsp;&nbsp;
                <span>{storeHeader?.rating.toFixed(1)}</span>
            </div>
            <ReviewWrap>
                <IconBtn
                    src={storeHeader?.isDib ? favoriteFill : favorite}
                    alt={storeHeader?.isDib ? "찜한 상태" : "찜 안한 상태"}
                    width={19}
                    onClick={() => handleToggleDib({storeId, isDib: storeHeader?.isDib})}
                />
                &nbsp;<Font>{storeHeader?.dibs}</Font>&nbsp;|&nbsp;
                <Font>리뷰 수 {storeHeader?.reviewCnt}</Font>&nbsp;|&nbsp;
                <Font>사장님 댓글 수 {storeHeader?.ownerReviewCnt}</Font>
            </ReviewWrap>
        </StoreHeaderWrap>
    );
}

export default StoreHeader;