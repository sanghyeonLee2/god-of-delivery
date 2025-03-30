import React from "react";
import { FlexOnly, Font } from "../../../../assets/styles/CommonStyle";
import { omittedDate } from "../../../../utils/transducer";
import { OwnerReviewWrap } from "components/common/Review/ReviewLayout";
import { useDeleteOwnerReview } from "pages/owner/OwnerReviewPage/hooks/useDeleteOwnerReview";
import { MainBtn } from "components/common/Button/main/MainButton";

function OwnerReview({ ownerReview, isOwner }) {
  const deleteOwnerReview = useDeleteOwnerReview();
  return (
    <OwnerReviewWrap>
      <FlexOnly justify={"space-between"}>
        <Font>사장님</Font>
        <Font size={"small"} color={"gray"}>
          {omittedDate(ownerReview?.createdAt)}
        </Font>
      </FlexOnly>
      <Font size={"small"}>{ownerReview.content}</Font>
      {isOwner && (
        <MainBtn
          text={"리뷰삭제"}
          type={"button"}
          onClick={() => deleteOwnerReview.mutate(ownerReview.ceoReviewId)}
        />
      )}
    </OwnerReviewWrap>
  );
}

export default OwnerReview;
