import React from "react";
import { AuthPageInner, AuthPageOuter } from "./AuthPageLayout";
import SignInForm from "./components/SignInForm";
import { Font } from "../../../assets/styles/CommonStyle";
import { Link } from "react-router-dom";

function SignInPage(props) {
  return (
    <AuthPageOuter>
      <AuthPageInner>
        <h1>로그인</h1>
        <SignInForm />
        <div>
          <Font color={"gray"}>계정이 없으신가요?</Font>
          <Link to="/sign-up">
            <Font>회원가입</Font>
          </Link>
        </div>
      </AuthPageInner>
    </AuthPageOuter>
  );
}

export default SignInPage;
