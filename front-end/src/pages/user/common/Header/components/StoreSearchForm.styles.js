import styled from "styled-components";
import { elementSize, flexLayout } from "../../../../../assets/styles/Mixin";

export const SearchInputForm = styled.form`
  display: flex;
  max-width: 70rem;
  border-radius: 2rem;
  ${elementSize("100%", "4.3rem")};
  transition: background-color 0.2s ease;
  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.08);

  &:hover {
    background-color: #e5e5e5;
  }

  input {
    &:hover {
      background-color: transparent;
    }

    box-shadow: none;
    flex: 1;
    border: none;
    padding: 0 1.4rem;
    background-color: transparent;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    height: 100%;
  }

  button {
    border: none;
    ${elementSize("4.5rem", "100%")};
    ${flexLayout("center", "center")};
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
`;
