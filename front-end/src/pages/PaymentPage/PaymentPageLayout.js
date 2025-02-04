import styled from "styled-components";
import {elementSize, flexLayout} from "../../assets/styles/Mixin";

export const PaymentHeader = styled.div`
    height: 60px;
    ${flexLayout("space-between")}
`
export const PaymentContent = styled.ul`
    li {
        margin-bottom: 15px;
    }
`
export const PaymentInputTextWrap = styled.div`
    input {
        ${elementSize("100%", "45px")};
    }
`