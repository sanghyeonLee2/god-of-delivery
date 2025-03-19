import React from "react";
import {MainBtn} from "components/common/Button/main/MainButton";
import {ErrorPageWrap, Font} from "../../../assets/styles/CommonStyle";
import {useError} from "../../../hooks/useError";

const ErrorPage = () => {
    const {errorData, navigateHome} = useError()

    return (
        <ErrorPageWrap>
            <div>
                <h1>⚠ 오류 발생</h1>
                <h2>{errorData.status} 에러</h2>
                <Font>{errorData.message}</Font>
                <MainBtn text={"홈 화면으로 돌아가기"} onClick={navigateHome}/>
            </div>
        </ErrorPageWrap>
    );
};

export default ErrorPage;
