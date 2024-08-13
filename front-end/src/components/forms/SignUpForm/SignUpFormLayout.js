import styled from "styled-components";
import {elementSize} from "../../../assets/styles/Mixin";

export const SignUpFormStyle = styled.form`
  padding-top: 28px;

  input {
    margin-top: 10px;
    ${elementSize("450px", "50px")}
    display: block;
  }

  #sign-up-btn {
    margin-top: 14px;
  }
`
export const FormElementDiv = styled.div`
  margin-top: 10px`