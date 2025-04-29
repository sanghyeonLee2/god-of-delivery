import styled from "styled-components";
import { outerPadding } from "@assets/styles/CommonStyle";

export const AuthPageOuter = styled.div`
  ${outerPadding()};
  max-width: 60rem;
  margin: 0 auto;
  display: grid;
`;

export const AuthPageInner = styled.div`
  button {
    margin: 1.5rem 0;
    height: 4.5rem;
  }

  div:last-child {
    text-align: center;
  }
`;
