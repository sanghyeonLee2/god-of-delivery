import styled from "styled-components";
import {outerPadding} from "../../assets/styles/CommonStyle";
import {setBorder} from "../../assets/styles/Mixin";

export const CartWrap = styled.div`
    min-height: 900px;
    max-width: 800px;
    margin: 0 auto;
    ${outerPadding()};
`
export const CartHeader = styled.div`
    min-height: 95px`

export const MinStoreInfoWrap = styled.div`
    height: 60px`


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

