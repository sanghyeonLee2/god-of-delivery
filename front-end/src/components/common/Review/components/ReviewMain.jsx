import React from 'react';
import {FlexOnly, Font} from "../../../../assets/styles/CommonStyle";
import {omittedDate} from "../../../../utils/transducer";
import StarRatings from "react-star-ratings/build/star-ratings";
import Image from "components/common/Image/Image";
import {ReviewImgWrap} from "components/common/Review/ReviewLayout";

function ReviewMain({review, watch, updateMode, handleRatingChange}) {
    return (
        <>
            <FlexOnly justify={"space-between"}>
                <Font>{review?.userId}</Font>
                <Font size={"small"} color={"gray"}>{omittedDate(review?.createdAt)}</Font>
            </FlexOnly>
            <StarRatings rating={updateMode ? watch("rating") : review?.rating}
                         starRatedColor={"gold"}
                         name="rating"
                         starHoverColor="gold"
                         changeRating={updateMode ? handleRatingChange : undefined}
                         starDimension={updateMode ? "30px" : "20px"}
                         starSpacing={"2px"}/>
            {(review?.img && !updateMode) &&
                <ReviewImgWrap>
                    <Image src={review.img} height={150} width={150}/>
                </ReviewImgWrap>
            }
            <Font size={"small"}>{review.content}</Font>
        </>
    );
}

export default ReviewMain;