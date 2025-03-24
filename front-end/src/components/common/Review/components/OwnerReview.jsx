import React from "react";
import { FlexOnly, Font } from "../../../../assets/styles/CommonStyle";
import { omittedDate } from "../../../../utils/transducer";
import { OwnerReviewWrap } from "components/common/Review/ReviewLayout";
import { useOwnerReview } from "../../../../hooks/useOwnerReview";
import ReviewUpdateMode from "components/common/Review/components/ReviewUpdateMode";
import Textarea from "components/common/TextArea/TextArea";

function OwnerReview({ ownerReview, isOwner }) {
  const {
    updateMode,
    setUpdateMode,
    cancelUpdateMode,
    register,
    deleteReview,
    updateReview,
    handleSubmit,
  } = useOwnerReview(ownerReview);
  return (
    <OwnerReviewWrap
      onSubmit={handleSubmit((data) => updateReview({ id: ownerReview.id, content: data.content }))}
    >
      <FlexOnly justify={"space-between"}>
        <Font>사장님</Font>
        <Font size={"small"} color={"gray"}>
          {omittedDate(ownerReview?.createdAt)}
        </Font>
      </FlexOnly>
      <Font size={"small"}>{ownerReview.content}</Font>
      {isOwner && (
        <ReviewUpdateMode
          updateMode={updateMode}
          cancelUpdateMode={cancelUpdateMode}
          setUpdateMode={setUpdateMode}
          deleteReview={deleteReview}
        >
          <Textarea {...register("content")} defaultValue={ownerReview?.content} />
        </ReviewUpdateMode>
      )}
    </OwnerReviewWrap>
  );
}

export default OwnerReview;
