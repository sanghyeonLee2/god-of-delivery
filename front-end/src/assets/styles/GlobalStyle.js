import {createGlobalStyle} from "styled-components";
import {COLORS} from "./colors";

const HOVER_COLOR = "#F5F5F5"
const FONT_FAMILY = "양진체"
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;

    }

    @font-face {
        font-family: ${FONT_FAMILY};
        src: url('https://fastly.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff') format('woff');
        font-weight: normal;
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
        box-sizing: border-box;
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
        height: 900px;
    }

    button {
        &:hover {
            filter: brightness(0.95);
        }

        cursor: pointer;
        border: 0;
        padding-block: 0;
        padding-inline: 0;
    }

    p, li, h1, strong, span, label {
        font-family: ${FONT_FAMILY}, sans-serif;
        line-height: 2;
    }

    .common-text {
        color: white;
        font-size: 15px
    }

    .App {
        position: relative;
        min-height: 100%;
        padding-bottom: 150px;
    }
`
