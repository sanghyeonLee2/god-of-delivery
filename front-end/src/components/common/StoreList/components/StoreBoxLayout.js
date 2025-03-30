import styled from "styled-components";
import { flexLayout } from "../../../../assets/styles/Mixin";
import { innerPadding } from "../../../../assets/styles/CommonStyle";

export const StoreOuter = styled.li`
  ${innerPadding()};
  margin-bottom: 14px;
  box-sizing: border-box;
  border: lightgray 1px solid;
  ${flexLayout("flex-start", "center")};
`;

export const StoreInfoWrap = styled.div`
  padding-left: 10px;
  flex: 1;

  svg {
    color: #ffd700;
    margin-bottom: 4px;
  }
`;
export const OperationHourWrap = styled.div`
  ${flexLayout("space-between")};
  flex-wrap: wrap;
  gap: 4px 10px;
`;
