import React, { forwardRef } from "react";
import { FiX } from "react-icons/fi";
import { CancelIconBtnWrap } from "@components/common/Button/icon/CancelIconBtn.styles";

const CancelIconBtn = forwardRef(({ type, onClick }, ref) => {
  return (
    <CancelIconBtnWrap type={type} onClick={onClick} ref={ref}>
      <FiX size={25} color={"red"} />
    </CancelIconBtnWrap>
  );
});

export default CancelIconBtn;
