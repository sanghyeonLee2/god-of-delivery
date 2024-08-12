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
    border: 0;
    border-radius: 4px;
  }

  li {
    list-style: none;
  }

  ul {
    padding-inline-start: 0;
  }

  #root {
    height: 100%;
  }

  button {
    background-color: #FF4F6D;
    border-style: none;
    border-radius: 4px;
    cursor: pointer;
  }

  p, li, h1, strong, span {
    font-family: ${FONT_FAMILY}, sans-serif;
  }

  span {
    color: white;
    font-size: 15px
  }

  .App {
    min-height: 100%;
    padding-bottom: 200px;
  }

  #root {
    height: 900px;
  }
`
