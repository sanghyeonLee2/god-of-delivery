import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorPageWrap, FlexOnly, Font } from "@assets/styles/CommonStyle";
import { useRecoilValue } from "recoil";
import { userRoleState } from "@recoil/user/atoms";
import { MainBtn } from "@components/common/Button/main/MainButtons";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();
  const role = useRecoilValue(userRoleState);
  const navigatePage = () => {
    resetErrorBoundary();
    if (role === "user") {
      return navigate("/");
    }
    return navigate("owners/me");
  };
  const errorMessage = error?.message || "알 수 없는 오류가 발생했습니다";
  return (
    <ErrorPageWrap>
      <div>
        <h1>⚠️ 오류 발생</h1>
        <h2>컴포넌트 렌더링 중 문제가 발생했습니다</h2>
        <FlexOnly justify={"center"}>
          <div>
            <Font size={"small"} color={"red"}>
              {errorMessage}
            </Font>
            <MainBtn text={"홈 화면으로 돌아가기"} onClick={navigatePage} />
          </div>
        </FlexOnly>
      </div>
    </ErrorPageWrap>
  );
};

export default ErrorFallback;
