import React, { forwardRef } from "react";

const Input = forwardRef(({ type = "text", ...rest }, ref) => {
  return <input type={type} ref={ref} {...rest} />;
});

export default Input;
