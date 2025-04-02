import styled from "styled-components";
import { elementSize, flexLayout } from "../../../../assets/styles/Mixin";
import { COLORS } from "../../../../assets/styles/colors";

export const CancelIconBtnWrap = styled.button`
  top: 1.5rem;
  right: 1.5rem;
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  border: 0;
  padding: 0;
  pointer-events: ${({ $isDisable }) => $isDisable && "none"};
  opacity: ${({ $isDisable }) => $isDisable && "0.25"};
  ${flexLayout("center", "center")};

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const MainButtonWrap = styled.button`
  height: 4rem;
  width: ${({ $width }) => $width || "100%"};
  background-color: white;

  &:hover {
    background-color: #f2f3f7;
  }

  border: 0.1rem solid rgb(218, 219, 223);
  border-radius: 0.4rem;
`;

export const ModalButtonWrap = styled.button`
  position: absolute;
  bottom: 0;
  z-index: 10;
  ${elementSize("100%", "6rem")};
  background-color: ${COLORS.BTN.THIRD};

  &:hover {
    background-color: #666666;
  }
`;

export const AddBtnWrap = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 0.1rem solid;

  &:hover {
    background-color: #f2f3f7;
  }

  background-color: white;
  ${elementSize("100%", "5rem")};
  box-sizing: initial;
  text-align: center;
  align-content: center;
  font-size: inherit;
  border-radius: 0 0 1rem 1rem;
`;

export const SubButtonWrap = styled.button`
  width: 100%;
  opacity: ${({ $isLoading }) => ($isLoading ? "0.9" : "1")};
  cursor: ${({ $isLoading }) => ($isLoading ? "not-allowed" : "pointer")};
  position: relative;
  height: ${({ $height }) => $height || "4rem"};
  background-color: ${COLORS.BTN.SUB};
  border-radius: 0.4rem;

  &:hover {
    background-color: #0e5fc1;
  }
`;

export const TransButtonWrap = styled.button`
  ${elementSize("100%", "100%")}
  border-radius: 0.4rem;
  border: 0;
  background-color: white;
  font-size: inherit;
  box-sizing: content-box;
`;

export const OrderBtnWrap = styled.div`
  margin-top: 2rem;
  height: 5rem;
`;
