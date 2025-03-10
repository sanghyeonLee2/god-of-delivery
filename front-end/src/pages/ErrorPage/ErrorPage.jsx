import React from "react";
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h1>⚠ 오류 발생</h1>
            <p>요청을 처리하는 중 문제가 발생했습니다.</p>
            <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
        </div>
    );
};

export default ErrorPage;
