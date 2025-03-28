import {createGlobalStyle} from "styled-components";
import {COLORS} from "./colors";
import {innerPadding} from "./CommonStyle";

/*const HOVER_COLOR = "#F5F5F5"*/
const FONT_FAMILY = "LINESeedKR"
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: ${FONT_FAMILY};
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }

    input {
        &:focus {
            outline: none;
        }

        &:hover {
            background-color: ${COLORS.HOVER};
        }

        padding: 0 20px;
        border-radius: 4px;
    }

    textarea {
        resize: none;
        width: 100%;
        margin-bottom: 4px;
        ${innerPadding()};
    }

    li {
        list-style: none;
        cursor: pointer;
        align-content: center;
    }

    ul {
        padding-inline-start: 0;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh; /* 전체 뷰포트 높이 설정 */
        padding-top: 92px;
    }

    button {
        cursor: pointer;
        border: 0;
        padding-block: 0;
        padding-inline: 0;
    }

    p, li, h1, strong, span, label, textarea {
        font-family: ${FONT_FAMILY};
        line-height: 2;
    }

    .common-text {
        color: white;
        font-size: 15px
    }

    .App {
        position: relative;
        flex-grow: 1;
    }


`
