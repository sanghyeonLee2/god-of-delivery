import React from "react";
import * as S from "./AuthPage.styles";
import SignInForm from "./components/SignInForm";
import { Font } from "@assets/styles/CommonStyle";
import { Link } from "react-router-dom";
import { COLORS } from "@constants/style";
import Title from "@components/common/Title/Title";

function SignInPage() {
  return (
    <S.AuthPageOuter>
      <S.AuthPageInner>
        <Title size={"x-large"} text={"로그인"} />
        <SignInForm />
        <div>
          <Font color={COLORS.FONT.SUB}>계정이 없으신가요?</Font>
          <Link to="/auth/sign-up">
            <Font>회원가입</Font>
          </Link>
          <Font size={"x-small"}>입력 폼 기본값으로 로그인 가능</Font>
        </div>
      </S.AuthPageInner>
    </S.AuthPageOuter>
  );
}

export default SignInPage;
