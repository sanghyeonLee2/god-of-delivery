import React from "react";
import { ModalHeaderWrap } from "../MenuDetail/components/ModalComponents.styles";
import { Font } from "@assets/styles/CommonStyle";
import CancelIconBtn from "@components/common/Button/icon/CancelIconBtn";
import useCloseModal from "@hooks/useCloseModal";

function ModalHeader({ title }) {
  const closeModal = useCloseModal();
  return (
    <ModalHeaderWrap>
      <Font size={"large"}>{title}</Font>
      <CancelIconBtn onClick={closeModal} />
    </ModalHeaderWrap>
  );
}

export default ModalHeader;
