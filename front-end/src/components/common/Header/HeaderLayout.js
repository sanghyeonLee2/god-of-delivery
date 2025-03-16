import styled from "styled-components";
import {flexLayout, setBorder} from "../../../assets/styles/Mixin";
import searchBoxBackground from "../../../assets/img/search-box-background.jpg";
import {innerPadding} from "../../../assets/styles/CommonStyle";


export const HeaderInner = styled.div`
    ${flexLayout("space-between", "center")};
    max-width: 1100px;
    margin: 0 auto;
    height: 92px;
    ${innerPadding()};
`;

export const HeaderOuter = styled.div`
    border-bottom: 1px solid #d9d9d9;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
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
export const UserMenuWrap = styled.div`
    position: relative;

    ul {
        display: none;
        border: 1px solid black;
        right: 0; /* 우측 정렬 */
        width: 110px;
        background-color: white;
        position: absolute;
        top: 100%;
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
        ${setBorder()};
        overflow: hidden;
    }

    li {
        border-bottom: 1px solid gray;
        text-align: center;
        height: 60px;
    }

    p {
        font-size: 11px;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color: #f0f0f0;
    }
`
