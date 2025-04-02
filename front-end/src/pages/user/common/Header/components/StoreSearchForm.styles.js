import styled from "styled-components";
import { elementSize, flexLayout } from "../../../../../assets/styles/Mixin";

export const SearchInputForm = styled.form`
  display: flex;
  max-width: 700px;
  border-radius: 20px;
  ${elementSize("100%", "43px")};
  transition: background-color 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

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
    padding: 0 14px;
    background-color: transparent;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 100%;
  }

  button {
    border: none;
    ${elementSize("45px", "100%")};
    ${flexLayout("center", "center")};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
