import styled from "styled-components";
import {elementSize, flexLayout} from "../../assets/styles/Mixin";

export const AuthForm = styled.form`
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
export const SignInBottom = styled.div`
    height: 30px;
    position: relative; /* 상대 위치 설정 */
    top: 15px;
`
export const SignInBottomLeft = styled.div`
    ${flexLayout};
    float: left;

    input {
        margin-top: 0;
        margin-right: 5px;
        width: 20px;
        height: 20px;
    }
`
export const SignInBottomRight = styled.div`
    ${flexLayout("center", "center")}
    float: right`
export const FormElementDiv = styled.div`
    margin-top: 10px`
export const ErrorMsg = styled.small`
    color: red`