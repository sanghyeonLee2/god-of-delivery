import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";
import {COLORS} from "../../../assets/styles/colors";


export const HeaderWrap = styled.div`
    ${flexLayout("space-between", "center")};
    max-width: 1100px;
    margin: 0 auto;
    height: 92px;
    padding: 0 10px;
`

export const CartWrap = styled.div`
    cursor: pointer;
    position: absolute;
    background-color: ${COLORS.BTN.SUB};
    border-radius: 35px;
    ${elementSize("80px", "80px")};
    ${flexLayout("center", "center")};
`
