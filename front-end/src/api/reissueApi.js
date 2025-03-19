import {authInstance} from "./instance";
import {postApi} from "./user";
import {API_URLS} from "../constants/urls";

const reissue = async (originalRequest) => {
    try {
        originalRequest._retry = true;

        const reissueResult = await postApi(API_URLS.REISSUE, {
            refreshToken: localStorage.getItem("refresh-token"),
        });

        if (reissueResult.status >= 300) {
            return Promise.reject(reissueResult);
        }

        const {accessToken} = reissueResult.data;
        localStorage.setItem("access-token", accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return authInstance(originalRequest);
    } catch (error) {
        console.error("🚨 리이슈 요청 중 오류 발생:", error);
        return Promise.reject(error);
    }
};

export default reissue;