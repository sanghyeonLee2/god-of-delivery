import styled from "styled-components";
import { outerPadding } from "../../../assets/styles/CommonStyle";

export const AuthPageOuter = styled.div`
  ${outerPadding()};
  max-width: 600px;
  margin: 0 auto;
  display: grid;
`;
export const AuthPageInner = styled.div`
  button {
    margin: 15px 0;
    height: 45px;
  }

  div:last-child {
    text-align: center;
  }
`;
