import React from "react";
import { FlexOnly, Font } from "../../../../assets/styles/CommonStyle";
import { omittedDate } from "../../../../utils/transducer";
import StarRatings from "react-star-ratings/build/star-ratings";
import {
  ReviewContentWrap,
  ReviewMainWrap,
} from "components/common/Review/components/ReviewMainLayout";

function ReviewMain({ review }) {
  return (
    <ReviewMainWrap>
      <FlexOnly justify={"space-between"}>
        <Font>{review?.userId}</Font>
        <Font size={"small"} color={"gray"}>
          {omittedDate(review?.createdAt)}
        </Font>
      </FlexOnly>
      <StarRatings
        rating={review?.rating}
        starRatedColor={"gold"}
        name="rating"
        starHoverColor="gold"
        starDimension={"20px"}
        starSpacing={"2px"}
      />
      <ReviewContentWrap>
        <Font size={"small"}>{review.content}</Font>
      </ReviewContentWrap>
    </ReviewMainWrap>
  );
}

export default ReviewMain;
