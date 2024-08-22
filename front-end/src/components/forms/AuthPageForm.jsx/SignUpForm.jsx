import React from 'react';
import Input from "../../common/Input/Input";
import {AuthForm, ErrorMsg, FormElementDiv} from "./AuthPageFormLayout";
import Label from "../../common/Label/Label";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {userAuthValid} from "../../../validation/userSchema";
import {usePost} from "../../../hooks/usePost";
import {Button} from "../../common/Button/Button";
import useGet from "../../../hooks/useGet";

function SignUpForm(props) {
    const [getData, getIsError, refetch, status] = useGet(`/duplication`)
    const {
        register,
        handleSubmit,
        getValues,
        formState: {
            errors
        }
    } = useForm({resolver: yupResolver(userAuthValid), context: {status}})

    const {mutate: onSignUp} = usePost("/signup")
    return (
        <AuthForm onSubmit={handleSubmit((data) => onSignUp(data))}>
            <FormElementDiv>
                <Label text={"이름"} htmlFor={"user_name"}/>
                <Input type={"text"} id={"user_name"} register={register("nickname")}/>
                <ErrorMsg>{errors.nickname?.message}</ErrorMsg>
            </FormElementDiv>
            <FormElementDiv>
                <Label text={"휴대폰 번호"} htmlFor={"user_phone_num"}/>
                <Input type={"number"} id={"user_phone_num"} register={register("phoneNum")}/>
                <ErrorMsg>{errors.phoneNum?.message}</ErrorMsg>
            </FormElementDiv>
            <FormElementDiv>
                <Label text={"아이디"} htmlFor={"user_id"}/>
                <Input type={"text"} id={"user_id"} register={register("userId")}/>
                <Button type={"button"} text={"중복확인"} onClick={() => {
                    refetch()
                    console.log(getData, ",", getIsError)
                    //getValues().userId
                }}/>
                <ErrorMsg>{errors.userId?.message}</ErrorMsg>
            </FormElementDiv>
            <FormElementDiv>
                <Label text={"비밀번호"} htmlFor={"user_pw"}/>
                <Input type={"password"} id={"user_pw"} register={register("password")}/>
                <ErrorMsg>{errors.password?.message}</ErrorMsg>
            </FormElementDiv>
            <FormElementDiv>
                <Label text={"비밀번호 확인"} htmlFor={"user_pw_check"}/>
                <Input type={"password"} id={"user_pw_check"} register={register("passwordCheck")}/>
                <ErrorMsg>{errors.passwordCheck?.message}</ErrorMsg>
            </FormElementDiv>
            <Input id={"sign-up-btn"} type={"submit"}/>
        </AuthForm>
    );
}

export default SignUpForm;