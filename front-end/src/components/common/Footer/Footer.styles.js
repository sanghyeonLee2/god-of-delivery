import styled from "styled-components";
import { flexLayout } from "@assets/styles/Mixin";
import { innerPadding } from "@assets/styles/CommonStyle";
import { COLORS } from "@constants/style";

export const FooterWrap = styled.footer`
  ${innerPadding()};
  position: relative;
  border-top: 0.1rem solid ${COLORS.BORDER};
  height: 9.2rem;
`;

export const FooterInner = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  ${flexLayout("space-between", "center")};
`;
