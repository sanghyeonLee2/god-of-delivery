import styled from "styled-components";
import { innerPadding } from "@assets/styles/CommonStyle";
import { flexLayout } from "@assets/styles/Mixin";

export const InfoBox = styled.div`
  ${innerPadding()};
  border-radius: 1rem;
  background-color: #f6f6f6;
`;

export const MenuInfoInner = styled.div`
  padding: 1.5rem 0;
  ${flexLayout("space-between")};
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9f9f9;
    box-shadow: 0 0.2rem 0.8rem 0 rgba(0, 0, 0, 0.06);
  }
`;
