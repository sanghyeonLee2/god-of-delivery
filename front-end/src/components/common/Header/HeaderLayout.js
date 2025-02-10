import styled from "styled-components";
import {flexLayout} from "../../../assets/styles/Mixin";
import searchBoxBackground from "../../../assets/img/search-box-background.jpg";
import {innerPadding} from "../../../assets/styles/CommonStyle";


export const HeaderWrap = styled.div`
    ${flexLayout("space-between", "center")};
    max-width: 1100px;
    margin: 0 auto;
    height: 92px;
    ${innerPadding()}
`
export const SearchBoxOuter = styled.div`
    height: 260px;
    background-image: url(${searchBoxBackground});
    background-size: cover;
    background-position: center;
    padding-top: 60px;

    h2 {
        font-size: 40px;
        font-weight: bolder;
        color: white;
    }

    section {
        text-align: center;
        padding-bottom: 10px;
    }
`
