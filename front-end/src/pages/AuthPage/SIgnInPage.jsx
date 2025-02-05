import React from 'react';
import {AuthPageInner, AuthPageOuter} from "./components/AuthPageLayout";
import SignInForm from "./components/SignInForm";

function SignInPage(props) {
    return (
        <AuthPageOuter>
            <AuthPageInner>
                <h1>로그인</h1>
                <SignInForm/>
            </AuthPageInner>
        </AuthPageOuter>
    );
}

export default SignInPage;