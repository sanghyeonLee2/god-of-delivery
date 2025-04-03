import React from "react";
import { AuthPageInner, AuthPageOuter } from "./AuthPage.styles";
import SignInForm from "./components/SignInForm";
import { Font } from "@assets/styles/CommonStyle";
import { Link } from "react-router-dom";
import { Title } from "chart.js";
import { COLORS } from "@constants/style";

function SignInPage() {
  return (
    <AuthPageOuter>
      <AuthPageInner>
        <Title size={"x-large"} text={"로그인"} />
        <SignInForm />
        <div>
          <Font color={COLORS.FONT.SUB}>계정이 없으신가요?</Font>
          <Link to="/auth/sign-up">
            <Font>회원가입</Font>
          </Link>
        </div>
      </AuthPageInner>
    </AuthPageOuter>
  );
}

export default SignInPage;
