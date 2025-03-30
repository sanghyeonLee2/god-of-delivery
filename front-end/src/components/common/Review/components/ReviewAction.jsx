import React from "react";
import { MainBtn } from "components/common/Button/main/MainButton";
import { ReviewBtnWrap } from "components/common/Review/ReviewLayout";
import useMyReviewActions from "../hooks/useMyReviewActions";
import ReviewUpdate from "components/common/Review/components/ReviewUpdate";

function ReviewAction({ review }) {
  const { form, deleteReview, updateReview, cancelUpdateMode, updateMode, setUpdateMode } =
    useMyReviewActions(review?.rating, review?.content);
  return (
    <div>
      {updateMode && <ReviewUpdate review={review} form={form} />}
      <ReviewBtnWrap>
        <MainBtn
          width={"60px"}
          text={updateMode ? "취소" : "수정"}
          type={"button"}
          onClick={updateMode ? cancelUpdateMode : setUpdateMode}
        />
        <MainBtn
          width={"60px"}
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
