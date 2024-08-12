import {css} from "styled-components";

export const flexLayout = (justify = 'flex-start', align = 'stretch') => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`

export const elementSize = (width = "auto", height = "auto") => css`
  width: ${width};
  height: ${height};
`