import React, { forwardRef } from "react";
import { FiX } from "react-icons/fi";
import { CancelIconBtnWrap } from "components/common/Button/icon/CancelIconBtnLayout";

const CancelIconBtn = forwardRef(({ children, type, onClick, src, width, isDisable }, ref) => {
  return (
    <CancelIconBtnWrap type={type} onClick={onClick} ref={ref}>
      <FiX size={35} color={"red"} />
    </CancelIconBtnWrap>
  );
});

export default CancelIconBtn;
