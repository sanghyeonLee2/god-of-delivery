import React from "react";
import {useNavigate} from "react-router-dom";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        console.error("Boundary에서 캐치한 에러:", error);
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.error("에러 정보:", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorFallback/>;
        }
        return this.props.children;
    }
}

const ErrorFallback = () => {
    const navigate = useNavigate();
    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h1>문제가 발생했습니다.</h1>
            <p>잠시 후 다시 시도해주세요.</p>
            <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
        </div>
    );
};

export default ErrorBoundary;
