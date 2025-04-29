import React, { forwardRef } from "react";
import { FiX } from "react-icons/fi";
import { CancelIconBtnWrap } from "@components/common/Button/icon/CancelIconBtn.styles";

const CancelIconBtn = forwardRef(
  ({ type, onClick, top = "auto", bottom = "auto", left = "auto", right = "auto" }, ref) => {
    return (
      <CancelIconBtnWrap
        type={type}
        onClick={onClick}
        ref={ref}
        $top={top}
        $bottom={bottom}
        $left={left}
        $right={right}
      >
        <FiX size={25} color={"red"} />
      </CancelIconBtnWrap>
    );
  }
);

export default CancelIconBtn;
