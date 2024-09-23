import React from 'react';
import {AuthPageInner, AuthPageOuter} from "./AuthPageLayout";
import SignUpForm from "../../components/forms/AuthPageForm/SignUpForm";

function SignUpPage(props) {
    return (
        <AuthPageOuter>
            <AuthPageInner>
                <h1>회원가입</h1>
                <SignUpForm/>
            </AuthPageInner>
        </AuthPageOuter>
    );
}

export default SignUpPage;