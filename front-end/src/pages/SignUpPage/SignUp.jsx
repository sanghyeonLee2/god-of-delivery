import React from 'react';
import {SignUpInner, SignUpOuter} from "./SignUpLayout";
import SignUpForm from "../../components/forms/SignUpForm/SignUpForm";

function SignUp(props) {
    return (
        <SignUpOuter>
            <SignUpInner>
                <h1>회원가입</h1>
                <SignUpForm/>
            </SignUpInner>
        </SignUpOuter>
    );
}

export default SignUp;