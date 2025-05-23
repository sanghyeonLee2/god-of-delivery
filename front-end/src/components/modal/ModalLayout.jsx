import React from "react";
import ModalHeader from "./components/ModalHeader";
import * as S from "./Modal.styles";
import SelectMapModal from "./SelectMap/SelectMapModal";
import CreateReview from "@components/modal/CreateReview/CreateReview";
import CreateOwnerReview from "@components/modal/CreateOwnerReview/CreateOwnerReview";
import CartMenuDetailModal from "@components/modal/MenuDetail/CartMenuDetailModal";
import MenuDetailModal from "@components/modal/MenuDetail/MenuDetailModal";

function ModalLayout({ modalType, modalData }) {
  return (
    <S.ModalOuter>
      <S.ModalInner>
        <ModalHeader title={modalType} />
        {modalType === "메뉴상세" && <MenuDetailModal modalData={modalData} />}
        {modalType === "메뉴수정" && <CartMenuDetailModal modalData={modalData} />}
        {modalType === "주소설정" && <SelectMapModal />}
        {modalType === "리뷰작성" && <CreateReview modalData={modalData} />}
        {modalType === "사장님 리뷰작성" && <CreateOwnerReview modalData={modalData} />}
      </S.ModalInner>
    </S.ModalOuter>
  );
}

export default ModalLayout;
