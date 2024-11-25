import axios from "axios";
import {reissueApi} from "../api/user";

//const API_KEY = process.env.REACT_APP_API
//const API_KEY = process.env.REACT_APP_POSTMAN_MOCK// postman
const API_KEY = process.env.REACT_APP_JSON_SERVER// 테스트 용

class BaseApi {
    //ES2022부터 constructor 불필요
    axiosOption = {
        baseURL: API_KEY,
        headers: {
            "Content-Type": "application/json",
        }
    }
    instance = axios.create(
        this.axiosOption
    )


    getInstance() {
        return this.instance
    }


    getAuthInstance() {
        this.axiosOption.headers.Authorization = this.appendToken()
        this.authInterceptor()
        return this.instance
    }

    appendToken() {
        const tmpAccess = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNkZiIsImlhdCI6MTcyNDY3Njc4OCwiZXhwIjoxNzI0Njc4NTg4fQ.oGqFkk5loQ9s7a48p6D5c-UiYspLuj6OLQMxTvpM01I"
        return `Bearer ${tmpAccess}`
    }

    authInterceptor() {
        return this.instance.interceptors.response.use(
            async (response) => {
                if (response.status === 200) {
                    return response
                }
            }, async (err) => {
                if (err.response.status === 401) {
                    const result = await reissueApi("/auth/sign-in/reissue")
                    const newAccessToken = result.data.accessToken;

                    // 기존 요청의 Authorization 헤더를 갱신
                    err.config.headers.Authorization = `Bearer ${newAccessToken}`;

                    // 기존 요청을 다시 전송
                    return axios.request(err.config);
                } else {
                    localStorage.clear()
                    alert("토큰 만료 인해 로그아웃 되었습니다.")
                }
            })
    }
}

export const authInstance = () => {
    return new BaseApi().getAuthInstance()
}

export const instance = () => {
    return new BaseApi().getInstance()
}




