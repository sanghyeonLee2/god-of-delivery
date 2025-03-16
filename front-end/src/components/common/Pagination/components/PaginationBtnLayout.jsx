import styled from "styled-components";
import {flexLayout} from "../../../../assets/styles/Mixin";
import {COLORS} from "../../../../assets/styles/colors";

export const PageButton = styled.button`
    background-color: ${({$clicked}) => $clicked ? COLORS.BTN.SUB : "white"};
    color: ${({$clicked}) => $clicked && "white"};
    border-radius: 500px;
    margin: 0 4px;
    ${flexLayout("center", "center")};
`