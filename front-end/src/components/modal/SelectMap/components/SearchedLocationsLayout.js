import styled from "styled-components";
import { innerPadding } from "../../../../assets/styles/CommonStyle";

export const LocationsInfoWrap = styled.ul`
  min-height: 78px;
  margin: 10px auto;
  width: 80%;
  border: 1px solid;
  > li:not(:last-child) {
    border-bottom: 1px solid;
  }
`;
export const LocationsInfoItem = styled.li`
  background-color: white;
  height: 78px;
  &:hover {
    filter: brightness(0.95);
  }

  ${innerPadding()};
`;
