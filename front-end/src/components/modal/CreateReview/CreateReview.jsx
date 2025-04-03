import React from "react";
import StarRatings from "react-star-ratings/build/star-ratings";
import useCreateReview from "./hooks/useCreateReview";
import { ModalContentWrap, ModalTitleDescriptionWrap } from "@components/modal/Modal.styles";
import { Font } from "@assets/styles/CommonStyle";
import { ModalReviewForm } from "@components/modal/CreateReview/CreateReview.styles";
import Textarea from "@components/common/TextArea/TextArea";
import { ModalBtn } from "@components/common/Button/main/MainButtons";
import { COLORS } from "@constants/colors";

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
          <Font color={COLORS.FONT.SUB}>{modalData.representativeOrder}</Font>
        </ModalTitleDescriptionWrap>
        <ModalReviewForm>
          <StarRatings
            rating={form.watch("rating")}
            starRatedColor="gold"
            starHoverColor="gold"
            changeRating={form.handleRatingChange}
            name="rating"
            starDimension="3rem"
            starSpacing="0.5rem"
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
