import styled from "styled-components";
import {elementSize} from "../../../../assets/styles/Mixin";
import {COLORS} from "../../../../assets/styles/colors";

export const MainButtonWrap = styled.button`
    height: 40px;
    width: ${({$width}) => $width || "100%"};
    background-color: white;
    border: 1px solid ${COLORS.BTN.MAIN};
    border-radius: 4px;
`
export const ModalButtonWrap = styled.button`
    position: sticky;
    bottom: 0;
    z-index: 10;
    ${elementSize("100%", "60px")};
    background-color: ${COLORS.BTN.SUB};
    border-radius: 0 0 4px 4px;
`

export const SubButtonWrap = styled.button`
    width: 100%;
    opacity: ${({$isLoading}) => ($isLoading ? "0.9" : "1")};
    cursor: ${({$isLoading}) => $isLoading ? "not-allowed" : "pointer"};
    position: relative;
    height: ${({$height}) => $height || "40px"};
    background-color: ${COLORS.BTN.SUB};
    border-radius: 4px;
`;


export const TransButtonWrap = styled.button`
    ${elementSize("100%", "100%")}
    border-radius: 4px;
    border: 0;
    background-color: white;
    font-size: inherit;
    box-sizing: content-box;
`
export const OrderBtnWrap = styled.div`
    margin-top: 20px;
    height: 50px;
`