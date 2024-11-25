import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const MenuBoxWrap = styled.li`
    min-height: 300px;
`

export const MenuInfoInner = styled.ul`
    padding-top: 10px;
    padding-bottom: 10px;
    min-height: 150px;
    ${flexLayout("space-between")};
`

export const LeftMenuInfo = styled.li`
    max-width: 400px;
`
export const MenuTitleWrap = styled.li`
    div:nth-child(1) {
        ${flexLayout("stretch", "center")};
    }
`

export const Popular = styled.div`
    border-radius: 50%;
    border-style: dotted;
    margin-right: 8px;
    font-size: 12px;

    ${elementSize("35px", "35px")}
    span {
        width: 100%;
        text-align: center;
    }
`
export const RecommendWrap = styled.li`
    height: 30px;

    div {
        background-color: #F1EDE6;
        color: #BA9c86;
        font-size: 13px;
        text-align: center;
        border-radius: 7px;
        align-content: center;
        ${elementSize("80px", "23px")}
    }

`
export const MenuDescriptionWrap = styled.li`
    height: 30px;
`
export const MenuPriceWrap = styled.li`
    height: 33px
`

export const MenuReviewWrap = styled.li`
    color: gray;
    height: 23px
`
export const MenuPicture = styled.div`
    background-color: lightgray;
    border-radius: 10px;
    ${elementSize("150px", "150px")}
`
