import React from "react";
import useMyReviewActions from "@components/common/Review/hooks/useMyReviewActions";
import ReviewUpdate from "@components/common/Review/components/ReviewUpdate";
import { ReviewBtnWrap } from "@components/common/Review/Review.styles";
import { MainBtn } from "@components/common/Button/main/MainButtons";

function ReviewAction({ review }) {
  const { form, deleteReview, updateReview, cancelUpdateMode, updateMode, setUpdateMode } =
    useMyReviewActions(review?.rating, review?.content);
  return (
    <div>
      {updateMode && <ReviewUpdate review={review} form={form} />}
      <ReviewBtnWrap>
        <MainBtn
          width={"6rem"}
          text={updateMode ? "취소" : "수정"}
          type={"button"}
          onClick={updateMode ? cancelUpdateMode : setUpdateMode}
        />
        <MainBtn
          width={"6rem"}
          text={updateMode ? "수정완료" : "삭제"}
          type={"button"}
          onClick={
            updateMode ? () => updateReview(review.reviewId) : () => deleteReview(review.reviewId)
          }
        />
      </ReviewBtnWrap>
    </div>
  );
}

export default ReviewAction;
