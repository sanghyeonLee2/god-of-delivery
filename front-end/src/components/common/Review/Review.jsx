import React from "react";
import { useRecoilValue } from "recoil";
import { userIdState, userRoleState } from "@recoil/user/atoms";
import ReviewMain from "@components/common/Review/components/ReviewMain";
import ReviewAction from "@components/common/Review/components/ReviewAction";
import OwnerReview from "@components/common/Review/components/OwnerReview";
import { MainBtn } from "@components/common/Button/main/MainButtons";
import useOpenModal from "@hooks/useOpenModal";
import { MODAL_TYPES } from "@constants/modalTypes";

function Review({ review }) {
  const openModal = useOpenModal();
  const role = useRecoilValue(userRoleState);
  const currentUserId = useRecoilValue(userIdState);
  return (
    <div>
      <ReviewMain review={review} />
      {currentUserId === review.userId && role === "user" && <ReviewAction review={review} />}
      {review?.CeoReview && (
        <OwnerReview ownerReview={review?.CeoReview} isOwner={role === "owner"} />
      )}
      {currentUserId === review.userId && role === "owner" && !review.CeoReview && (
        <MainBtn
          text={MODAL_TYPES.OWNER_CREATE_REVIEW}
          onClick={() => openModal(MODAL_TYPES.OWNER_CREATE_REVIEW, review)}
        />
      )}
    </div>
  );
}

export default Review;
