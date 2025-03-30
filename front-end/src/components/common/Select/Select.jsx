import React, { forwardRef } from "react";

const Select = forwardRef(({ children, defaultValue, ...rest }, ref) => {
  return (
    <select ref={ref} defaultValue={defaultValue} {...rest}>
      {children}
    </select>
  );
});

export default Select;
