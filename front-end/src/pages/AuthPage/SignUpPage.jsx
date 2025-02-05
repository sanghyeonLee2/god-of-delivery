import React from 'react';
import {AuthPageInner, AuthPageOuter} from "./components/AuthPageLayout";
import SignUpForm from "./components/SignUpForm";

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