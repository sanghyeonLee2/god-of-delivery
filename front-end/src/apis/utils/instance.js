import axios from "axios";
import {postReissue} from "../api/user";
import {useNavigate} from "react-router-dom";

//const API_KEY = process.env.REACT_APP_API
const API_KEY = "https://44dc058b-cade-4265-891c-9cfed7476d1b.mock.pstmn.io"


export const instance = axios.create({
    baseURL: API_KEY,
    headers: {
        "Content-Type": "application/json",
    }
})

export const authInstance = axios.create({
    baseURL: API_KEY,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
})


const useInterceptor = () => {
    const navigate = useNavigate()
    authInstance.interceptors.response.use(
        async (config) => {
            if (config.data.status === 200) {
                return config
            } else if (config.data.status === 401) {
                const result = await postReissue("reissue")
            } else {
                localStorage.clear()
                navigate("/")
                alert("토큰 만료 인해 로그아웃 되었습니다.")
            }

        })
}
