import React from "react";
import { SubBtn } from "@components/common/Button/main/MainButtons";
import { MODAL_TYPES } from "@constants/modalTypes";
import useOpenModal from "@hooks/useOpenModal";

function CreateReviewSection({ order }) {
  const openModal = useOpenModal();
  return (
    <div style={{ marginTop: "1rem" }}>
      <SubBtn
        type={"button"}
        text={MODAL_TYPES.CREATE_REVIEW}
        height={"4rem"}
        onClick={() =>
          openModal(MODAL_TYPES.CREATE_REVIEW, {
            storeName: order.storeName,
            orderId: order.orderId,
            storeId: order.storeId,
            representativeOrder: order.representativeOrder,
          })
        }
      />
    </div>
  );
}

export default CreateReviewSection;
