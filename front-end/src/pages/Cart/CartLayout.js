import styled from "styled-components";
import {setBorder} from "../../assets/styles/Mixin";

export const CartHeader = styled.div`
    min-height: 95px`

export const MinStoreInfoWrap = styled.div`
    height: 60px`

export const MenuAddBtnWrap = styled.div`
    ${setBorder()};
    border-top: none;
    height: 50px;
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

