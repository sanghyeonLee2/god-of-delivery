import React from "react";
import { MainBtn } from "@components/common/Button/main/MainButtons";
import { ErrorPageWrap, Font } from "@assets/styles/CommonStyle";
import { useError } from "./hooks/useError";

const ErrorPage = () => {
  const { errorData, navigateBack } = useError();

  return (
    <ErrorPageWrap>
      <div>
        <h1>⚠ 오류 발생</h1>
        <h2>{errorData.status} 에러</h2>
        <Font>{errorData.message}</Font>
        <MainBtn text={"뒤로가기"} onClick={navigateBack} />
      </div>
    </ErrorPageWrap>
  );
};

export default ErrorPage;
