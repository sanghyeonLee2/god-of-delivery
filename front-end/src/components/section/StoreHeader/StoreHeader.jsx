import React from 'react';
import {ReviewWrap, StoreHeaderWrap, StoreImgWrap} from "./StoreHeaderLayout";
import StarRatings from "react-star-ratings/build/star-ratings";
import {LargeSizeTitleFont} from "../../../assets/styles/CommonStyle";

function StoreHeader({haaderData}) {
    return (
        <StoreHeaderWrap>
            <StoreImgWrap/>
            <LargeSizeTitleFont>
                <p>{haaderData.storeName}</p>
            </LargeSizeTitleFont>
            <div>
                <StarRatings
                    rating={haaderData.rating}
                    starRatedColor={"gold"}
                    starDimension={"30px"}
                />
                &nbsp;
                &nbsp;
                <span>{haaderData.rating}</span>
            </div>
            <ReviewWrap>
                <p>최근리뷰&nbsp;{haaderData.currentReview}</p>&nbsp;|&nbsp;
                <p>최근사장님댓글&nbsp;{haaderData.currentOwnerReview}</p>
            </ReviewWrap>
        </StoreHeaderWrap>
    );
}

export default StoreHeader;