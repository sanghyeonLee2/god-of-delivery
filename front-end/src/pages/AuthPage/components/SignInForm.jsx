import React from 'react';
import {
    AuthForm,
    ErrorMsg,
    FormElementDiv,
    SignInBottom,
    SignInBottomLeft,
    SignInBottomRight
} from "../AuthPageFormLayout";
import Label from "../../../components/common/Label/Label";
import Input from "../../../components/common/Input/Input";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {signInValid} from "../../../validation/userSchema";
import {usePost} from "../../../hooks/usePost";

function SignInForm(props) {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        resolver: yupResolver(signInValid),
    })
    const {mutate: onSignIn} = usePost("signIn")
    return (
        <AuthForm onSubmit={handleSubmit((data) => onSignIn(data))}>
            <FormElementDiv>
                <Label text={"아이디"} htmlFor={"user_name"}/>
                <Input type={"text"} id={"user_name"} register={register("userId")}/>
                <ErrorMsg>{errors.userId?.message}</ErrorMsg>
            </FormElementDiv>
            <FormElementDiv>
                <Label text={"비밀번호"} htmlFor={"user_phone_num"}/>
                <Input type={"password"} id={"user_phone_num"} register={register("password")}/>
                <ErrorMsg>{errors.password?.message}</ErrorMsg>
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