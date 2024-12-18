import styled from "styled-components";
import {elementSize, flexLayout, setBorder} from "../../../assets/styles/Mixin";
import {exampleColor, outerPadding} from "../../../assets/styles/CommonStyle";

export const CartMenuBox = styled.div`
    ${setBorder()};
    min-height: 100px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom: none;
`

export const MenuOptionWrap = styled.ul`
    ${outerPadding()};
    border-bottom: 1px solid gray;
`
export const MenuOptionLeft = styled.div`
    ${flexLayout("space-between")};
`
export const MenuOptionImg = styled.div`
    border-radius: 8px;
    ${elementSize("70px", "70px")};
    ${exampleColor()};
`
export const OptionBtnOuter = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
`
export const OptionBtnInner = styled.div`
    width: 275px;
    ${flexLayout("space-between")};
    flex-direction: row-reverse;
`
export const ChgQuantityWrap = styled.div`
    display: flex;
    ${elementSize("130px", "45px")};

    button {
        width: 35%;
    }

    div {
        align-content: center;
        text-align: center;
        width: 30%;
    }
`