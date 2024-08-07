import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
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
`