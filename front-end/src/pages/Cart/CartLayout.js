import styled from "styled-components";
import {exampleColor, outerPadding} from "../../assets/styles/CommonStyle";
import {elementSize, flexLayout, setBorder} from "../../assets/styles/Mixin";

export const CartWrap = styled.div`
    min-height: 900px;
    max-width: 800px;
    margin: 0 auto;
    ${outerPadding()};
`
export const CartHeader = styled.div`
    min-height: 80px`

export const MinStoreInfoWrap = styled.div`
    height: 60px`
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
export const MenuAddBtnWrap = styled.div`
    height: 50px;
    ${setBorder()}
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    text-align: center;
    align-content: center;
    margin-bottom: 20px;

    button {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`
export const MethodReceiptBox = styled.li`
    ${flexLayout("space-between", "center")};
    ${setBorder()};
    ${outerPadding()};
    height: 60px;
    margin-bottom: 20px;
`
export const PaymentBox = styled.ul`
    ${setBorder()};
    ${outerPadding()};
`
export const PriceWrap = styled.div`
    ${flexLayout("space-between", "center")};`

