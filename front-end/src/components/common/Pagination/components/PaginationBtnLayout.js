import styled from "styled-components";
import {flexLayout} from "../../../../assets/styles/Mixin";
import {COLORS} from "../../../../assets/styles/colors";

export const PageButton = styled.button`
    background-color: ${(props) => props.$clicked ? COLORS.BTN.SUB : "white"};
    color: ${(props) => props.$clicked && "white"};
    border-radius: 500px;
    margin: 0px 4px;
    ${flexLayout("center", "center")};

`