import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";
import {COLORS} from "../../../assets/styles/colors";
import searchBoxBackground from "../../../assets/img/search-box-background.jpg";


export const HeaderWrap = styled.div`
    ${flexLayout("space-between", "center")};
    max-width: 1100px;
    margin: 0 auto;
    height: 92px;
    padding: 0 10px;
`

export const CartWrap = styled.div`
    cursor: pointer;
    position: absolute;
    background-color: ${COLORS.BTN.SUB};
    border-radius: 35px;
    ${elementSize("80px", "80px")};
    ${flexLayout("center", "center")};
`

export const SearchBoxOuter = styled.div`
    height: 260px;
    background-image: url(${searchBoxBackground});
    background-size: cover; /* 또는 contain */
    background-position: center;
`
export const SearchBoxInner = styled.div`
    ${elementSize("580px", "100%")};
    margin: 0 auto;
    align-content: center;
`
export const SearchBoxTextOuter = styled.div`
    ${flexLayout("center", "center")}
`

export const HeaderMainText = styled.p`
    font-size: 40px;
    font-weight: bolder;
    color: white;
`

export const HeaderTextWrap = styled.section`
    text-align: center;
`
