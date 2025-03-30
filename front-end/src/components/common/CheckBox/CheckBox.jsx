import React from "react";

function CheckBox({ children, name, onChange, checked, defaultChecked }) {
  return (
    <label>
      <input
        type={"checkbox"}
        name={name}
        onChange={onChange}
        checked={checked}
        defaultChecked={defaultChecked}
      />
      {children}
    </label>
  );
}

export default CheckBox;
