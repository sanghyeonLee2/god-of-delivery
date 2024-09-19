import {axiosApi, axiosAuthApi} from "../utils/instance";

export const getUserApi = async (url) => {
    try {
        const res = await axiosApi.get(url)
        if (res.status === 200) {
            return res.data.available
        }
    } catch (err) {
        console.log(err)
    }
}

export const getApi = async (url) => {
    try {
        return await axiosAuthApi.get(url)
    } catch (err) {
        console.log(err)
    }
}
export const getAuthApi = async (url) => {
    try {
        /*   const fullUrl = `${axiosAuthApi.defaults.baseURL}${url}`; // 전체 URL 생성
           console.log('Request URL:', fullUrl); // 요청 URL 로그 출력
           console.log(axiosAuthApi); // 요청 URL 로그 출력*/

        const res = await axiosApi().get(url);
        console.log('Response:', res.data); // 응답 로그 출력
        return res;
    } catch (err) {
        console.log('Error fetching data:', err);
    }
}


export const postUserApi = async (url) => {
    try {
        return await axiosApi.post(url)
    } catch (err) {
        console.log(err)
    }
}

export const postAuthUserApi = async (url) => {
    try {
        return await axiosAuthApi.post(url)
    } catch (err) {
        console.log(err)
    }
}


export const postReissue = async (url) => {
    try {
        return await axiosAuthApi.post(url, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("refresh-token")}`
            }
        })
    } catch (err) {
        console.log(err, "여기")
    }
}