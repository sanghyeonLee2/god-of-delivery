import styled from "styled-components";
import {flexLayout} from "../../../../assets/styles/Mixin";

export const IconBtnWrap = styled.button`
    border: 0;
    padding: 0;
    background-color: white;
    pointer-events: ${({$isDisable}) => $isDisable && "none"};
    opacity: ${({$isDisable}) => $isDisable && "0.25"};
    ${flexLayout("center", "center")};
`