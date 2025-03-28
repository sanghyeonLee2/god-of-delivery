import React from "react";
import { SubBtn } from "components/common/Button/main/MainButton";
import LabeledTextInput from "components/common/Input/LabeledTextInput";
import { ErrorMsg } from "../../../../assets/styles/CommonStyle";
import { useSignIn } from "../hooks/useSignIn";

function SignInForm(props) {
  const { register, handleSubmit, handleSignIn, isLoggingIn, errors } = useSignIn();
  return (
    <form onSubmit={handleSubmit((data) => handleSignIn(data))}>
      <LabeledTextInput type={"text"} title={"아이디"} {...register("userId")} />
      <ErrorMsg>{errors.userId?.message}</ErrorMsg>
      <LabeledTextInput type={"password"} title={"비밀번호"} {...register("userPw")} />
      <ErrorMsg>{errors.userPw?.message}</ErrorMsg>
      <SubBtn type={"submit"} text={"로그인"} isLoading={isLoggingIn} />
    </form>
  );
}

export default SignInForm;
