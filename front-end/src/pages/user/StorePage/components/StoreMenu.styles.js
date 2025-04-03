import styled from "styled-components";
import { innerPadding } from "@assets/styles/CommonStyle";
import { flexLayout } from "@assets/styles/Mixin";
import { COLORS } from "@constants/style";

export const InfoBox = styled.div`
  ${innerPadding()};
  border-radius: 1rem;
  background-color: #ececec;
`;

export const MenuInfoInner = styled.div`
  padding: 1.5rem 0;
  ${flexLayout("space-between")};
  transition: all 0.2s ease;
  border-bottom: 1px solid ${COLORS.BORDER};

  &:hover {
    background-color: #f9f9f9;
    box-shadow:
      0 0.4rem 0.6rem -0.3rem rgba(0, 0, 0, 0.06),
      0 -0.2rem 0.4rem -0.2rem rgba(0, 0, 0, 0.08);
  }
`;
