import styled from "styled-components";
import {elementSize, setBorder} from "../../assets/styles/Mixin";

export const ModalOuter = styled.div`
    ${elementSize("100vw", "100vh")};
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
`
export const ModalInner = styled.div`
    ${setBorder()};
    border-radius: 10px;
    max-width: 100vw; /* 뷰포트 너비를 초과하지 않도록 */
    position: absolute;
    top: 310px;
    left: 50%;
    transform: translate(-50%, -50%);
    ${elementSize("460px", "600px")};
    background-color: white;
    overflow-y: hidden;
    @media (max-height: 780px ) {
        height: 500px;
    }
`

export const ModalContentWrap = styled.div`
    overflow-y: auto;
    max-height: 80%;
`

export const ModalForm = styled.form`
    margin: 0 auto;
`

