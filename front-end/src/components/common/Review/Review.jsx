import React from 'react';
import {FlexOnly, Font} from "../../../assets/styles/CommonStyle";
import StarRatings from "react-star-ratings/build/star-ratings";
import {OwnerReviewWrap} from "components/common/Review/ReviewLayout";
import {useRecoilValue} from "recoil";
import {userInfoState} from "../../../recoil/user/atoms";
import {MainBtn} from "components/common/Button/main/MainButton";
import {useDelete} from "../../../hooks/useDelete";

function Review({review}) {
    const userInfo = useRecoilValue(userInfoState)
    const {mutate: handleDeleteReview} = useDelete("review-delete")
    return (
        <div>
            <FlexOnly justify={"space-between"}>
                <Font>{review?.userId}</Font>
                <Font size={"small"} color={"gray"}>{review?.date}</Font>
            </FlexOnly>
            <FlexOnly justify={"space-between"}>
                <StarRatings rating={review?.rate}
                             starRatedColor={"gold"}
                             starDimension={"20px"}
                             starSpacing={"2px"}/>
                {userInfo.userId === review.userId &&
                    <FlexOnly justify={"space-between"} width={"130px"}>
                        <MainBtn width={"60px"} text={"수정"}/>
                        <MainBtn width={"60px"} text={"삭제"} onClick={() => handleDeleteReview(review.reveiwId)}/>
                    </FlexOnly>}
            </FlexOnly>
            {review.img && <div style={{height: "150px", marginTop: "5px"}}/>} {/*리뷰 이미지*/}
            <Font>
                {review?.content}
            </Font>
            {review?.owner &&
                <OwnerReviewWrap>
                    <FlexOnly justify={"space-between"}>
                        <Font>사장님</Font>
                        <Font size={"small"} color={"gray"}>{review?.owner.date}</Font>
                    </FlexOnly>
                    <Font size={"small"}>{review?.owner.content}</Font>
                </OwnerReviewWrap>}
        </div>
    );
}

export default Review;