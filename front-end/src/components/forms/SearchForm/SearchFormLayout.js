import {elementSize, flexLayout} from "../../../assets/styles/Mixin";
import styled from "styled-components";

export const SearchInputForm = styled.form`
  position: relative;
  ${flexLayout("center")};
  width: 500px;

  input {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border: 0;
    ${elementSize("86%", "100%")};
  }

  button {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    ${elementSize("14%", "100%")};
  }

  img {
    position: absolute;
    left: 390px;
    top: 10px;
    cursor: pointer;
    ${elementSize("31px", "31px")}
  }
`
export const SearchInputWrapper = styled.div`
  margin-top: 25px;
  height: 50px;
  ${flexLayout("space-between")}
`

export const LocationBtn = styled.button`
  background-color: white;
  width: 11%;

  img {
    ${elementSize("33px", "33px")}
  }
`

