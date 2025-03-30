import React from "react";
import { MainBtn } from "components/common/Button/main/MainButton";
import { useNavigate } from "react-router-dom";
import { ErrorPageWrap, Font } from "../../../assets/styles/CommonStyle";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();
  const navigatePage = () => {
    resetErrorBoundary();
    navigate("/");
  };
  const errorMessage = error?.message || "알 수 없는 오류가 발생했습니다.";
  return (
    <ErrorPageWrap>
      <div>
        <h1>⚠️ 오류 발생</h1>
        <h2>컴포넌트 렌더링 중 문제가 발생했습니다.</h2>
        <Font size={"small"} color={"red"}>
          {errorMessage}
        </Font>
        <MainBtn text={"홈 화면으로 돌아가기"} onClick={navigatePage} />
      </div>
    </ErrorPageWrap>
  );
};

export default ErrorFallback;
