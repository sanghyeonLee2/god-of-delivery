import React, { forwardRef } from "react";
import { IconBtnWrap } from "@components/common/Button/icon/IconBtn.styles";

const IconBtn = forwardRef(({ children, isDisable, ...rest }, ref) => {
  return (
    <IconBtnWrap $isDisable={isDisable} ref={ref} {...rest}>
      {children}
    </IconBtnWrap>
  );
});

export default IconBtn;
