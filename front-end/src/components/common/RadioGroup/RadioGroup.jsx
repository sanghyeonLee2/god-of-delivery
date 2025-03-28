import React from "react";
import styled from "styled-components";

function RadioGroup({ children, isOtherCheckStyle = false }) {
  return <RadioGroupWrap isOtherCheckStyle={isOtherCheckStyle}>{children}</RadioGroupWrap>;
}

export default RadioGroup;

const RadioGroupWrap = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOtherCheckStyle",
})`
  input {
    display: ${({ props }) => props.isOtherCheckStyle && "none"};
  }
`;
