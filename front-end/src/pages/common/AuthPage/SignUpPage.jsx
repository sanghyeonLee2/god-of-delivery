import React from "react";
import { AuthPageInner, AuthPageOuter } from "./AuthPage.styles";
import SignUpForm from "./components/SignUpForm";
import Title from "@components/common/Title/Title";

function SignUpPage() {
  return (
    <AuthPageOuter>
      <AuthPageInner>
        <Title size={"x-large"} text={"회원가입"} />
        <SignUpForm />
      </AuthPageInner>
    </AuthPageOuter>
  );
}

export default SignUpPage;
