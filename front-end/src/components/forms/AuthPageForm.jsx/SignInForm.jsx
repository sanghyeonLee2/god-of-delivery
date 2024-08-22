import React from 'react';
import {AuthForm, FormElementDiv, SignInBottom, SignInBottomLeft, SignInBottomRight} from "./AuthPageFormLayout";
import Label from "../../common/Label/Label";
import Input from "../../common/Input/Input";

function SignInForm(props) {

    return (
        <AuthForm>
            <FormElementDiv>
                <Label text={"아이디"} htmlFor={"user_name"}/>
                <Input type={"text"} id={"user_name"}/>
            </FormElementDiv>
            <FormElementDiv>
                <Label text={"비밀번호"} htmlFor={"user_phone_num"}/>
                <Input type={"password"} id={"user_phone_num"}/>
            </FormElementDiv>
            <SignInBottom>
                <SignInBottomLeft>
                    <Input type={"checkbox"} id={"auto-log-in"}/>
                    <Label text={"자동 로그인"} htmlFor={"auto-log-in"}/>
                </SignInBottomLeft>
                <SignInBottomRight>
                    <small>아이디 찾기</small>&nbsp;|&nbsp;<small>비밀번호 찾기</small>
                </SignInBottomRight>
            </SignInBottom>
            <Input id={"sign-up-btn"} type={"submit"}/>
        </AuthForm>
    );
}

export default SignInForm;