import styled from "styled-components";
import {elementSize} from "../../../../assets/styles/Mixin";
import {COLORS} from "../../../../assets/styles/colors";

export const MainButtonLayout = styled.button`
    ${elementSize("130px", "45px")}
    background-color: white;
    border: 1px solid ${COLORS.BTN.MAIN};
    border-radius: 4px;
`

export const SubButtonLayout = styled.button`
    ${elementSize("100%", "100%")}
    background-color: ${COLORS.BTN.SUB};
    border-radius: 4px;
`

export const TransButtonLayout = styled.button`
    ${elementSize("100%", "100%")}
    border-radius: 4px;
    border: 0;
    font-size: inherit;
    background-color: transparent;
    box-sizing: content-box;
`
export const OrderBtnWrap = styled.div`
    margin-top: 20px;
    height: 50px`