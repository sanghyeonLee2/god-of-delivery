import React, { forwardRef } from "react";

const Radio = forwardRef(function Radio(
  { children, value, name, checked, onChange, defaultChecked, ...rest },
  ref
) {
  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        defaultChecked={defaultChecked}
        ref={ref}
        {...rest}
      />
      {children}
    </label>
  );
});

export default Radio;
