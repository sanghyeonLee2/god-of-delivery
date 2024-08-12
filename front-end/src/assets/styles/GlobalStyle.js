import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  input {
    padding: 0;
    border: 0;
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
    cursor: pointer;
  }
`