import styled from "styled-components";
import {flexLayout, setBorder} from "../../../assets/styles/Mixin";
import {outerPadding} from "../../../assets/styles/CommonStyle";


export const PaymentBox = styled.ul`
    ${setBorder()};
    ${outerPadding()};
`
export const PriceWrap = styled.div`
    ${flexLayout("space-between", "center")};`
