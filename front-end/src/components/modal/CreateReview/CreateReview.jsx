import React from "react";
import { ModalBtn } from "components/common/Button/main/MainButton";
import StarRatings from "react-star-ratings/build/star-ratings";
import useCreateReview from "./hooks/useCreateReview";
import Textarea from "components/common/TextArea/TextArea";
import { ModalContentWrap, ModalTitleDescriptionWrap } from "components/modal/ModalLayout";
import { ModalReviewForm } from "components/modal/CreateReview/CreateReviewLayout";
import { Font } from "../../../assets/styles/CommonStyle";

function CreateReview({ modalData }) {
  const { form, mutation } = useCreateReview({
    orderId: modalData.orderId,
    storeId: modalData.storeId,
  });
  return (
    <div>
      <ModalContentWrap>
        <ModalTitleDescriptionWrap>
          <Font size={"large"}>{modalData.storeName}</Font>
          <Font color={"gray"}>{modalData.representativeOrder}</Font>
        </ModalTitleDescriptionWrap>
        <ModalReviewForm>
          <StarRatings
            rating={form.watch("rating")}
            starRatedColor="gold"
            starHoverColor="gold"
            changeRating={form.handleRatingChange}
            name="rating"
            starDimension="30px"
            starSpacing="5px"
          />
          <Textarea
            {...form.register("content")}
            placeholder={"리뷰를 작성해보세요"}
            style={{ width: "80%" }}
          />
        </ModalReviewForm>
      </ModalContentWrap>
      <ModalBtn
        text={"등록"}
        isLoading={mutation.isCreatingReview}
        onClick={form.handleSubmit((data) => mutation.handleCreateReview(data))}
      />
    </div>
  );
}

export default CreateReview;
