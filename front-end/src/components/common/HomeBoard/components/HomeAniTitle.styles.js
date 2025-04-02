import styled from "styled-components";
import { COLORS } from "../../../../assets/styles/colors";

export const TitleFont = styled.h1`
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  span {
    display: inline-block;
    margin: 0 4px;
    color: ${COLORS.BTN.SUB};
  }
`;
