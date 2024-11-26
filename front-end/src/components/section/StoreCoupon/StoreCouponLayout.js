import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const CouponWrap = styled.div`
    display: flex;
    border: #E7E6FA 1px solid;
    margin: 0 auto;
    border-radius: 8px;
    background-color: #F8F7FE;
    cursor: pointer;
    ${elementSize("65%", "40px")}
`

export const CouponContent = styled.div`
    align-content: center;
    width: 85%;
    padding-left: 20px;
    height: 100%;
    border-right: 3px dotted #E7E6FA;
`
export const DownloadImgWrap = styled.div`
    width: 15%;
    ${flexLayout("center", "center")}
`
