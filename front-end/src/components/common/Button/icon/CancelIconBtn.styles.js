import styled from "styled-components";
import { flexLayout } from "../../../../assets/styles/Mixin";

export const CancelIconBtnWrap = styled.button`
  top: 1.5rem;
  right: 1.5rem;
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  ${flexLayout("center", "center")};

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
