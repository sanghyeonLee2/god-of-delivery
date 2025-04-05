import { createGlobalStyle } from "styled-components";
import { COLORS, FONT_STYLE, SELECT_STYLE_URL } from "@constants/style";
import { textHover } from "./Mixin";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    .Toastify__toast {
        font-size: 1.6rem;
        font-family: ${FONT_STYLE.FAMILY}, sans-serif;
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
        font-family: ${FONT_STYLE.FAMILY};
        src: url(${FONT_STYLE.FACE}) format('woff2');
        font-weight: 700;
        font-style: normal;
    }

    select, option {
        font-family: ${FONT_STYLE.FAMILY}, sans-serif;
        font-size: 1.2rem;
    }


    select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        border: 0.1rem solid ${COLORS.BORDER};
        padding: 1rem 4rem 1rem 1.2rem;
        border-radius: 0.8rem;

        background-image: url(${SELECT_STYLE_URL});
        background-repeat: no-repeat;
        background-position: right 1.2rem center;
        background-size: 1.6rem;

        cursor: pointer;
        transition: all 0.3s ease;

        &:focus {
            outline: none;
            border-color: ${COLORS.HOVER};
            box-shadow: 0 0 0 0.3rem ${COLORS.BORDER};
        }
    }


    input, textarea, button {
        font-family: ${FONT_STYLE.FAMILY}, sans-serif;
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
    
    li {
        list-style: none;
        cursor: pointer;
    }

    ul {
        padding-inline-start: 0;
    }

    #root {
        position: relative;
        background-color: ${COLORS.BACKGROUND};
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
        font-family: ${FONT_STYLE.FAMILY};
        line-height: 2;
    }
`;
