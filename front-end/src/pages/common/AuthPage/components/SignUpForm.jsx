import React from "react";
import LabeledTextInput from "@components/common/Input/LabeledTextInput";
import { SubBtn } from "@components/common/Button/main/MainButtons";
import { ErrorMsg, Font } from "@assets/styles/CommonStyle";
import { Link } from "react-router-dom";
import { useSignUp } from "@pages/common/AuthPage/hooks/useSignUp";
import { COLORS } from "@constants/colors";

function SignUpForm() {
  const { register, handleSubmit, handleSignUp, isSigningUp, errors } = useSignUp();
  return (
    <>
      <form onSubmit={handleSubmit((data) => handleSignUp(data))}>
        <LabeledTextInput
          type={"text"}
          placeholder={"아이디를 입력해 주세요"}
          title={"아이디"}
          {...register("userId")}
        />
        <ErrorMsg>{errors.userId?.message}</ErrorMsg>
        <LabeledTextInput
          type={"password"}
          placeholder={"비밀번호를 입력해 주세요"}
          title={"비밀번호"}
          {...register("userPw")}
        />
        <ErrorMsg>{errors.userPw?.message}</ErrorMsg>
        <LabeledTextInput
          type={"password"}
          placeholder={"비밀번호를 재입력해 주세요"}
          title={"비밀번호 확인"}
          {...register("pwCheck")}
        />
        <ErrorMsg>{errors.pwCheck?.message}</ErrorMsg>
        <SubBtn type={"submit"} text={"회원가입"} isLoading={isSigningUp} />
      </form>
      <div>
        <Font color={COLORS.FONT.SUB}>가입한 계정이 있으신가요?</Font>
        <Link to="/auth/sign-in">
          <Font>로그인</Font>
        </Link>
      </div>
    </>
  );
}

export default SignUpForm;
