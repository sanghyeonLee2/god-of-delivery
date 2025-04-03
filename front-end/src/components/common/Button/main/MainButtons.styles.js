import styled from "styled-components";
import { elementSize } from "@assets/styles/Mixin";
import { COLORS } from "@assets/data/colors";

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
  border-top: 0.1rem solid ${COLORS.BORDER};

  &:hover {
    background-color: ${COLORS.HOVER};
  }

  background-color: white;
  ${elementSize("100%", "5rem")};
  text-align: center;
  align-content: center;
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
