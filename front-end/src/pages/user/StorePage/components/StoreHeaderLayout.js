import { flexLayout } from "../../../../assets/styles/Mixin";
import styled from "styled-components";

export const StoreHeaderWrap = styled.div`
  text-align: center;

  > div {
    margin-bottom: 18px;
  }
`;
export const ReviewWrap = styled.div`
  ${flexLayout("center")}
  svg:hover {
    transition: all 0.2s ease;
    transform: translateY(-4px);
  }

  button {
    margin-bottom: 2px;
  }
`;
