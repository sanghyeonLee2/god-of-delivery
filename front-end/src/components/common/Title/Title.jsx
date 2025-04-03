import React from "react";
import { Font } from "@assets/styles/CommonStyle";

function Title({ text, size }) {
  return (
    <div style={{ height: "9rem", alignContent: "center" }}>
      <Font size={size}>{text}</Font>
    </div>
  );
}

export default Title;
