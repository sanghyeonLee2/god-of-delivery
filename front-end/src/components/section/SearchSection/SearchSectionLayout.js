import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";
import searchBoxBackground from "../../../assets/img/search-box-background.jpg";

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
