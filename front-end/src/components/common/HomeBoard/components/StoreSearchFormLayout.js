import styled from "styled-components";
import { COLORS } from "../../../../assets/styles/colors";
import { elementSize, flexLayout } from "../../../../assets/styles/Mixin";

export const SearchInputForm = styled.form`
  &:hover {
    background-color: ${COLORS.HOVER};
  }

  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  border-radius: 20px;
  ${elementSize("100%", "45px")};
  background-color: #f7f7f8;

  input {
    flex: 1;
    height: 100%;
    padding: 0 14px;
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #f7f7f8;
  }

  button {
    ${elementSize("45px", "100%")};
    ${flexLayout("center", "center")};
    border: none;
    background-color: #f7f7f8;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
