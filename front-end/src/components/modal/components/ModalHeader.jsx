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
      <CancelIconBtn onClick={closeModal} top={"1.1rem"} right={"1.1rem"} />
    </ModalHeaderWrap>
  );
}

export default ModalHeader;
