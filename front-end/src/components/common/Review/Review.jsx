import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isModalOpenState } from "@recoil/flag/atoms";
import { userRoleState } from "@recoil/user/atoms";
import ReviewMain from "@components/common/Review/components/ReviewMain";
import ReviewAction from "@components/common/Review/components/ReviewAction";
import OwnerReview from "@components/common/Review/components/OwnerReview";
import { MainBtn } from "@components/common/Button/main/MainButtons";

function Review({ review }) {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const role = useRecoilValue(userRoleState);
  return (
    <div>
      <ReviewMain review={review} />
      {role === "user" && <ReviewAction review={review} />}
      {review?.CeoReview && (
        <OwnerReview ownerReview={review?.CeoReview} isOwner={role === "owner"} />
      )}
      {role === "owner" && !review.CeoReview && (
        <MainBtn
          text={"사장님 리뷰 작성"}
          onClick={() =>
            setIsModalOpen({
              modalType: "사장님 리뷰 작성",
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
