import React from 'react';
import LabeledTextInput from "components/common/Input/LabeledTextInput";
import {SubBtn} from "components/common/Button/main/MainButton";
import {ErrorMsg, Font} from "../../../assets/styles/CommonStyle";
import {Link} from "react-router-dom";
import {useSignUp} from "../../../hooks/useSignUp";

function SignUpForm(props) {
    const {register, handleSubmit, handleSignUp, isSigningUp, errors} = useSignUp()
    return (
        <form onSubmit={handleSubmit((data) => handleSignUp(data))}>
            <LabeledTextInput type={"text"} title={"아이디"} register={register("userId")}/>
            <ErrorMsg>{errors.userId?.message}</ErrorMsg>
            <LabeledTextInput type={"password"} title={"비밀번호"} register={register("userPw")}/>
            <ErrorMsg>{errors.userPw?.message}</ErrorMsg>
            <LabeledTextInput
                type={"password"} title={"비밀번호 확인"} register={register("pwCheck")}/>
            <ErrorMsg>{errors.pwCheck?.message}</ErrorMsg>
            <SubBtn type={"submit"} text={"회원가입"}/>
            <div>
                <Font color={"gray"}>
                    가입한 계정이 있으신가요?
                </Font>
                <Link to="/sign-in">
                    <Font>
                        로그인
                    </Font>
                </Link>
            </div>
        </form>
    );
}

export default SignUpForm;