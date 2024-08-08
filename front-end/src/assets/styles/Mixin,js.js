import {css} from "styled-components";

export const flexLayout = (justify = 'flex-start', align = 'stretch') => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`