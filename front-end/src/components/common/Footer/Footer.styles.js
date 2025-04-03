import styled from "styled-components";
import { flexLayout } from "@assets/styles/Mixin";
import { innerPadding } from "@assets/styles/CommonStyle";

export const FooterWrap = styled.footer`
  ${innerPadding()};
  position: relative;
  border-top: 0.1rem solid #d9d9d9;
  height: 9.2rem;
`;

export const FooterInner = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  height: 100%;
  ${flexLayout("space-between", "center")};
`;
