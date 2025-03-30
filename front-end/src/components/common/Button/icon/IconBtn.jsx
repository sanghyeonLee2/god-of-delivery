import { IconBtnWrap } from "./IconBtnLayout";
import React, { forwardRef } from "react";

const IconBtn = forwardRef(({ children, isDisable, ...rest }, ref) => {
  return (
    <IconBtnWrap $isDisable={isDisable} ref={ref} {...rest}>
      {children}
    </IconBtnWrap>
  );
});

export default IconBtn;
