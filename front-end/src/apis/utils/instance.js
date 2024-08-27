import axios from "axios";
import {postReissue} from "../api/user";

const API_KEY = process.env.REACT_APP_API
//const API_KEY = "https://44dc058b-cade-4265-891c-9cfed7476d1b.mock.pstmn.io" // 테스트 용


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


authInstance.interceptors.response.use(
    async (response) => {
        if (response.data.status === 200) {
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

