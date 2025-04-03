import React from "react";
import { FlexOnly, Font } from "@assets/styles/CommonStyle";
import { omittedDate } from "@utils/transducer";
import StarRatings from "react-star-ratings/build/star-ratings";
import * as S from "@components/common/Review/components/ReviewMain.styles";
import { COLORS } from "@assets/data/colors";

function ReviewMain({ review }) {
  return (
    <S.ReviewMainWrap>
      <FlexOnly justify={"space-between"}>
        <Font>{review?.userId}</Font>
        <Font size={"small"} color={COLORS.FONT.SUB}>
          {omittedDate(review?.createdAt)}
        </Font>
      </FlexOnly>
      <StarRatings
        rating={review?.rating}
        starRatedColor={"gold"}
        name="rating"
        starHoverColor="gold"
        starDimension={"2rem"}
        starSpacing={"0.2rem"}
      />
      <S.ReviewContentWrap>
        <Font size={"small"}>{review.content}</Font>
      </S.ReviewContentWrap>
    </S.ReviewMainWrap>
  );
}

export default ReviewMain;
