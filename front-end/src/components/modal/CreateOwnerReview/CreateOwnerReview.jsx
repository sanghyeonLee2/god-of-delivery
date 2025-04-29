import React from "react";
import { useCreateOwnerReview } from "./hooks/useCreateOwnerReview";
import { ModalReviewForm } from "@components/modal/CreateReview/CreateReview.styles";
import { ModalContentWrap } from "@components/modal/Modal.styles";
import Textarea from "@components/common/TextArea/TextArea";
import ReviewMain from "@components/common/Review/components/ReviewMain";
import { ModalBtn } from "@components/common/Button/main/MainButtons";

function CreateOwnerReview({ modalData }) {
  const { register, createOwnerReview, isCreatingOwnerReview } = useCreateOwnerReview(
    modalData.reviewId
  );
  return (
    <div>
      <ModalContentWrap>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <ReviewMain review={modalData} />
          <ModalReviewForm>
            <Textarea {...register("content")} placeholder={"리뷰를 작성 해주세요"} />
          </ModalReviewForm>
        </div>
      </ModalContentWrap>
      <ModalBtn
        text={"등록"}
        isLoading={isCreatingOwnerReview}
        onClick={() => createOwnerReview()}
      />
    </div>
  );
}

export default React.memo(CreateOwnerReview);
