import React from "react";
import ModalHeader from "./components/ModalHeader";
import { ModalInner, ModalOuter } from "./ModalLayout";
import SelectMapModal from "./SelectMap/SelectMapModal";
import CreateReview from "components/modal/CreateReview/CreateReview";
import CreateOwnerReview from "components/modal/CreateOwnerReview/CreateOwnerReview";
import CartDetailModal from "components/modal/MenuDetail/CartDetailModal";
import MenuDetailModal from "components/modal/MenuDetail/MenuDetailModal";

function DefaultModal({ modalType, modalData }) {
  return (
    <ModalOuter>
      <ModalInner>
        <ModalHeader title={modalType} />
        {modalType === "메뉴상세" && <MenuDetailModal modalData={modalData} />}
        {modalType === "주소설정" && <SelectMapModal />}
        {modalType === "메뉴수정" && <CartDetailModal modalData={modalData} />}
        {modalType === "리뷰작성" && <CreateReview modalData={modalData} />}
        {modalType === "사장님 리뷰작성" && <CreateOwnerReview modalData={modalData} />}
      </ModalInner>
    </ModalOuter>
  );
}

export default DefaultModal;
