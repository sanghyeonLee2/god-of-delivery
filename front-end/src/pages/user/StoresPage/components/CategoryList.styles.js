import { flexLayout } from "@assets/styles/Mixin";
import styled from "styled-components";
import { COLORS } from "@constants/colors";

export const CategoryListWrap = styled.ul`
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);

  @media (max-width: 88rem) {
    display: none;
  }

  border-bottom: 1px solid ${COLORS.BORDER};
  padding: 0 1.5rem;

  flex-wrap: wrap;
  ${flexLayout("space-between", "center")}
`;

export const CategoryElement = styled.li`
  border-right: 1px solid ${({ $clicked, id }) => ($clicked === id ? "#333333" : COLORS.BORDER)};

  align-content: center;
  background-color: ${({ $clicked, id }) => $clicked === id && "#333333"};
  flex: 1 1 calc(100% / 12);
  text-align: center;
  height: 7rem;

  p {
    color: ${({ $clicked, id }) => $clicked === id && "white"};
  }

  &:hover {
    background-color: #333333;

    p {
      color: white;
    }
  }
`;
