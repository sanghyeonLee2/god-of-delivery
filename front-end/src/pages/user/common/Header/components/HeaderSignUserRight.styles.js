import styled from "styled-components";
import { flexLayout, setBorder } from "../../../../../assets/styles/Mixin";

export const HeaderRight = styled.div`
  > *:first-child {
    display: none;
  }

  ${flexLayout("space-between", "center")};
  flex-direction: row;
  @media (max-width: 700px) {
    > *:first-child {
      display: block;
    }

    width: 160px;
  }

  width: 130px;
`;
export const LocationBtnWrap = styled.div`
  position: relative;

  div:last-child {
    min-height: 60px;
    position: absolute;
    top: 100%;
    right: 0;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    ${setBorder()};
    background: white;
    display: none;
    z-index: 101;
    white-space: nowrap;
    padding: 0 10px;
    align-content: center;
  }
`;
