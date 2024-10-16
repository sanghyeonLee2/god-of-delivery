import {createGlobalStyle} from "styled-components";


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
    padding: 0;
    border-radius: 4px;
    box-sizing: border-box;
  }

  li {
    list-style: none;
    cursor: pointer;
  }

  ul {
    padding-inline-start: 0;
  }

  #root {
    height: 900px;
  }

  button {
    cursor: pointer;
  }

  p, li, h1, strong, span, label {
    font-family: ${FONT_FAMILY}, sans-serif;
  }

  .common-text {
    color: white;
    font-size: 15px
  }

  .App {
    min-height: 100%;
    padding-bottom: 180px;
  }
`
