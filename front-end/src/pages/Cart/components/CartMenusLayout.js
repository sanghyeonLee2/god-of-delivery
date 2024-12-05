import styled from "styled-components";
import {elementSize, flexLayout, setBorder} from "../../../assets/styles/Mixin";
import {exampleColor, outerPadding} from "../../../assets/styles/CommonStyle";

export const CartMenuBox = styled.div`
    ${setBorder()}
    ${outerPadding()};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none;
    min-height: 100px`
export const MenuOptionWrap = styled.div`
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