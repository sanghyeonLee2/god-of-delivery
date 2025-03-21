import React from "react";
import { useReviewForm } from "../../../hooks/useReviewForm";
import OwnerReview from "components/common/Review/components/OwnerReview";
import ReviewUpdateMode from "components/common/Review/components/ReviewUpdateMode";
import { MainBtn } from "components/common/Button/main/MainButton";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "../../../recoil/flag/atoms";
import ReviewMain from "components/common/Review/components/ReviewMain";
import Textarea from "components/common/TextArea/TextArea";
import FileInput from "components/common/Input/FileInput";

function Review({ review }) {
  const {
    updateMode,
    isMyReview,
    deleteReview,
    updateReview,
    handleRatingChange,
    cancelUpdateMode,
    setUpdateMode,
    isOwner,
    register,
    watch,
    handleSubmit,
  } = useReviewForm(review);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  return (
    <div>
      <form onSubmit={handleSubmit(() => updateReview(review.reviewId))}>
        <ReviewMain
          updateMode={updateMode}
          watch={watch}
          handleRatingChange={handleRatingChange}
          review={review}
        />
        {isMyReview && (
          <ReviewUpdateMode
            updateMode={updateMode}
            cancelUpdateMode={cancelUpdateMode}
            setUpdateMode={setUpdateMode}
            deleteReview={deleteReview}
          >
            <FileInput type={"file"} name={"img"} register={register} />
            <Textarea {...register("content")} defaultValue={review?.content} />
          </ReviewUpdateMode>
        )}
      </form>
      {review.owner && (
        <OwnerReview ownerReview={review?.owner} isOwner={isOwner} />
      )}
      {!review.owner && isOwner && (
        <MainBtn
          text={"사장님 리뷰 추가"}
          width={"100%"}
          onClick={() =>
            setIsModalOpen({
              modalType: "사장님 리뷰작성",
              flag: true,
              modalData: review,
            })
          }
        />
      )}
    </div>
  );
}

export default Review;
