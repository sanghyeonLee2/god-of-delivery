import React from 'react';
import {ReviewWrap, StoreHeaderWrap} from "./StoreHeaderLayout";
import StarRatings from "react-star-ratings/build/star-ratings";
import {Font} from "../../../assets/styles/CommonStyle";

function StoreHeader({storeHeader}) {
    return (
        <StoreHeaderWrap>
            <Font size={"x-large"}>
                {storeHeader?.storeName}
            </Font>
            <div>
                <StarRatings
                    rating={storeHeader?.rating}
                    starRatedColor={"gold"}
                    starDimension={"30px"}
                />
                &nbsp;
                &nbsp;
                <span>{storeHeader?.rating}</span>
            </div>
            <ReviewWrap>
                <Font>리뷰 수&nbsp;{storeHeader?.reviewCnt}</Font>&nbsp;|&nbsp;
                <Font>사장님 댓글 수&nbsp;{storeHeader?.ownerReviewCnt}</Font>
            </ReviewWrap>
        </StoreHeaderWrap>
    );
}

export default StoreHeader;