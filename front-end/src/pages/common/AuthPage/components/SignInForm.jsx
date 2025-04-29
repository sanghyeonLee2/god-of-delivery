import React from "react";
import { SubBtn } from "@components/common/Button/main/MainButtons";
import LabeledTextInput from "@components/common/Input/LabeledTextInput";
import { ErrorMsg } from "@assets/styles/CommonStyle";
import { useSignIn } from "@pages/common/AuthPage/hooks/useSignIn";

function SignInForm() {
  const { register, handleSubmit, handleSignIn, isLoggingIn, errors } = useSignIn();
  return (
    <form onSubmit={handleSubmit((data) => handleSignIn(data))}>
      <LabeledTextInput
        type={"text"}
        title={"아이디"}
        defaultValue={"apple"}
        placeholder={"아이디를 입력해 주세요"}
        {...register("userId")}
      />
      <ErrorMsg>{errors.userId?.message}</ErrorMsg>
      <LabeledTextInput
        type={"password"}
        title={"비밀번호"}
        defaultValue={"123123123"}
        placeholder={"비밀번호를 입력해 주세요"}
        {...register("userPw")}
      />
      <ErrorMsg>{errors.userPw?.message}</ErrorMsg>
      <SubBtn type={"submit"} text={"로그인"} isLoading={isLoggingIn} />
    </form>
  );
}

export default SignInForm;
