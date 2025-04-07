import React from "react";
import { FlexOnly, Font } from "@assets/styles/CommonStyle";
import { omittedDate } from "@utils/transducer";
import { OwnerReviewWrap } from "@components/common/Review/Review.styles";
import { MainBtn } from "@components/common/Button/main/MainButtons";
import { useDeleteOwnerReview } from "@pages/owner/OwnerReviewPage/hooks/useDeleteOwnerReview";
import { COLORS } from "@constants/style";

function OwnerReview({ ownerReview, isOwner }) {
  const deleteOwnerReview = useDeleteOwnerReview();
  return (
    <OwnerReviewWrap>
      <FlexOnly justify={"space-between"}>
        <Font>사장님</Font>
        <Font size={"small"} color={COLORS.FONT.SUB}>
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
