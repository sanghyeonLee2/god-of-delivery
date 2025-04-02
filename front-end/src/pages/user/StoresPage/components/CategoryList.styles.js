import { flexLayout } from "../../../../assets/styles/Mixin";
import styled from "styled-components";

export const CategoryListWrap = styled.ul`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 880px) {
    display: none;
  }
  border-bottom: 1px solid #ddd;
  padding: 0 15px;

  flex-wrap: wrap;
  ${flexLayout("space-between", "center")}
`;
export const CategoryElement = styled.li`
  border-right: 1px solid ${({ $clicked, id }) => ($clicked === id ? "#333333" : "#ddd")};

  align-content: center;
  background-color: ${({ $clicked, id }) => $clicked === id && "#333333"};
  flex: 1 1 calc(100% / 12);
  text-align: center;
  height: 70px;

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
