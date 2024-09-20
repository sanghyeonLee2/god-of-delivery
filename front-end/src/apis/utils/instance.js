import axios from "axios";
import {postReissue} from "../api/user";

//const API_KEY = process.env.REACT_APP_API
//const API_KEY = process.env.REACT_APP_POSTMAN_MOCK// postman
const API_KEY = process.env.REACT_APP_JSON_SERVER// 테스트 용

class BaseApi {
    constructor() {
        this.axiosOption = {
            baseURL: API_KEY,
            headers: {
                "Content-Type": "application/json",
            }
        }
        this.instance = axios.create(
            this.axiosOption
        )
    }

    getInstance() {
        return this.instance
    }


    getAuthInstance() {
        console.log(this.axiosOption)
        this.axiosOption.headers.Authorization = this.appendToken()
        console.log(this.instance)
        this.authInterceptor()
        return this.instance
    }

    appendToken() {
        const tmpToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNkZiIsImlhdCI6MTcyNDY3Njc4OCwiZXhwIjoxNzI0Njc4NTg4fQ.oGqFkk5loQ9s7a48p6D5c-UiYspLuj6OLQMxTvpM01I"
        return `Bearer ${tmpToken}`
    }

    authInterceptor() {
        return this.instance.interceptors.response.use(
            async (response) => {
                if (response.data.status === 200 || response.data.status === 201) {
                    return response
                }
            }, async (err) => {
                if (err.response.status === 401) {
                    const result = await postReissue("/auth/sign-in/reissue")
                    /*localStorage.setItem("access-token", result.data.accessToken)
                      localStorage.setItem("refresh-token", result.data.refreshToken)*/
                    /*         err.response.accessToken = result.data.accessToken
                             err.response.refreshToken = result.data.refreshToken*/
                    return Promise.resolve(
                        {"accessToken": result.data.accessToken, "refreshToken": result.data.refreshToken}
                    )
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




