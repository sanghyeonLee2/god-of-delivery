import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const MenuBoxWrap = styled.li`
    min-height: 300px;
    padding-top: 10px;
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
    display: flex;
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