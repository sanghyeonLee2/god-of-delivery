import React from "react";
import ReviewAction from "components/common/Review/components/ReviewAction";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isModalOpenState } from "../../../recoil/flag/atoms";
import ReviewMain from "components/common/Review/components/ReviewMain";
import OwnerReview from "components/common/Review/components/OwnerReview";
import { userInfoState } from "../../../recoil/user/atoms";
import { MainBtn } from "components/common/Button/main/MainButton";

function Review({ review }) {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const { role } = useRecoilValue(userInfoState);
  return (
    <div>
      <ReviewMain review={review} />
      {role === "user" && <ReviewAction review={review} />}
      {review?.CeoReview && (
        <OwnerReview ownerReview={review?.CeoReview} isOwner={role === "owner"} />
      )}
      {role === "owner" && !review.CeoReview && (
        <MainBtn
          text={"사장님 리뷰 추가"}
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
