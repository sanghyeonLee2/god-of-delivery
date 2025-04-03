import styled from "styled-components";
import { flexLayout, setBorder } from "@assets/styles/Mixin";

export const HeaderRight = styled.div`
  > *:first-child {
    display: none;
  }

  ${flexLayout("space-between", "center")};
  flex-direction: row;

  @media (max-width: 70rem) {
    > *:first-child {
      display: block;
    }

    width: 16rem;
  }

  width: 13rem;
`;

export const LocationBtnWrap = styled.div`
  position: relative;

  div:last-child {
    min-height: 6rem;
    position: absolute;
    top: 100%;
    right: 0;
    box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.3);
    overflow: hidden;
    ${setBorder()};
    background: white;
    display: none;
    z-index: 101;
    white-space: nowrap;
    padding: 0 1rem;
    align-content: center;
  }
`;
