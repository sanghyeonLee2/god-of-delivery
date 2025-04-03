import { elementSize, flexLayout } from "@assets/styles/Mixin";
import styled from "styled-components";

export const StoreHeaderWrap = styled.div`
  text-align: center;
  height: 22rem;
  align-content: center;
`;
export const ReviewWrap = styled.div`
  margin: 0 auto;

  ${flexLayout("space-between", "center")}
  ${elementSize("24rem", "5.5rem")}
    svg:hover {
    transition: all 0.2s ease;
    transform: translateY(-0.4rem);
  }

  button {
    margin-bottom: 0.3rem;
  }
`;
