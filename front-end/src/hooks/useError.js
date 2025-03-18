import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export const useError = () => {
    const navigate = useNavigate();
    const [errorData, setErrorData] = useState({status: "404", message: "존재하지 않는 페이지입니다."});

    useEffect(() => {
        const storedError = sessionStorage.getItem("errorData");
        if (storedError) {
            setErrorData(JSON.parse(storedError));
            sessionStorage.removeItem("errorData");
        }
    }, []);
    return {errorData, navigateHome: () => navigate("/")}
}