import { createGlobalStyle } from "styled-components";
import { COLORS } from "@constants/colors";
import { innerPadding } from "./CommonStyle";
import { textHover } from "./Mixin";

const FONT_FAMILY = "LINESeedKR";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        box-sizing: border-box;
    }

    ::placeholder {
        color: #aaa;
        opacity: 1;
        font-size: 1.3rem;
    }

    input:focus::placeholder,
    textarea:focus::placeholder {
        color: #ccc;
    }

    @font-face {
        font-family: ${FONT_FAMILY};
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }

    option {
        font-family: "LINESeedKR", sans-serif;
        font-size: 1.2rem;
    }


    input, textarea, button {
        font-family: "LINESeedKR", sans-serif;
        font-size: 1.5rem;
        letter-spacing: -0.03rem;
        line-height: 1.4;
        color: #333;
    }

    a {
        text-decoration: none;
        color: inherit;
        ${textHover()};
    }

    input {
        border: none;

        &:focus {
            outline: none;
        }

        &:hover {
            background-color: ${COLORS.HOVER};
        }

        box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.08);
        padding: 0 2rem;
        border-radius: 0.4rem;
    }

    textarea {
        resize: none;
        width: 100%;
        margin-bottom: 0.4rem;
        ${innerPadding()};
    }

    li {
        list-style: none;
        cursor: pointer;
    }

    ul {
        padding-inline-start: 0;
    }

    #root {
        position: relative;
        background-color: #f9f9f9;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding-top: 9.2rem;
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
`;
