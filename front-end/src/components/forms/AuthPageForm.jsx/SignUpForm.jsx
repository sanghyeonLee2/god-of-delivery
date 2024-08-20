import React from 'react';
import Input from "../../common/Input/Input";
import {AuthFormWrapper, FormElementDiv} from "./AuthPageFormLayout";
import Label from "../../common/Label/Label";

function SignUpForm(props) {
    return (
        <AuthFormWrapper>
            <FormElementDiv>
                <Label text={"이름"} htmlFor={"user_name"}/>
                <Input type={"text"} id={"user_name"}/>
            </FormElementDiv>
            <FormElementDiv>
                <Label text={"휴대폰 번호"} htmlFor={"user_phone_num"}/>
                <Input type={"number"} id={"user_phone_num"}/>
            </FormElementDiv>
            <FormElementDiv>
                <Label text={"아이디"} htmlFor={"user_id"}/>
                <Input type={"text"} id={"user_id"}/>
            </FormElementDiv>
            <FormElementDiv>
                <Label text={"비밀번호"} htmlFor={"user_pw"}/>
                <Input type={"password"} id={"user_pw"}/>
            </FormElementDiv>
            <FormElementDiv>
                <Label text={"비밀번호 확인"} htmlFor={"user_pw_check"}/>
                <Input type={"password"} id={"user_pw_check"}/>
            </FormElementDiv>
            <Input id={"sign-up-btn"} type={"submit"}/>
        </AuthFormWrapper>
    );
}

export default SignUpForm;