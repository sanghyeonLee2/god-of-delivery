import styled from "styled-components";
import { flexLayout } from "@assets/styles/Mixin";
import { innerPadding } from "@assets/styles/CommonStyle";
import { COLORS } from "@constants/style";

export const StoreOuter = styled.li`
  button {
    position: absolute;
    top: 0.5rem;
    right: 0.6rem;
  }

  position: relative;
  ${innerPadding()};
  margin-bottom: 1rem;
  box-sizing: border-box;
  border: ${COLORS.BORDER} 1px solid;
  ${flexLayout("flex-start", "center")};
`;

export const StoreInfoWrap = styled.div`
  padding-left: 1rem;
  flex: 1;

  svg {
    color: #ffd700;
    margin-bottom: 0.5rem;
  }
`;

export const OperationHourWrap = styled.div`
  ${flexLayout("space-between")};
  flex-wrap: wrap;
  gap: 0.4rem 1rem;
`;
