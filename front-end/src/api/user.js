import {authInstance, instance} from "./instance";


class UserApi {
    constructor(isAuth) {
        this.instance = isAuth ? authInstance() : instance()
    }


    async request(method, url, data = {}) {  // ← data 매개변수 추가
        try {
            return this.instance({
                method,
                url,
                data, // ← body에 데이터 추가
            });
        } catch (err) {
            console.log(err);
        }
    }

    async reissue(url) {
        try {
            const tmpRefresh = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNkZiIsImlhdCI6MTcyNDY3Njc4OCwiZXhwIjoxNzI0Njc4NTg4fQ.oGqFkk5loQ9s7a48p6D5c-UiYspLuj6OLQMxTvpM01I"
            return await instance.post(url, {}, {
                headers: {
                    Authorization: `Bearer ${tmpRefresh}`
                }
            })
        } catch (err) {
            console.log(err, "여기")
        }
    }

}


export const authGetApi = (url) => {
    const api = new UserApi(true)
    return api.request("GET", url)
}

export const authPostApi = (url, data) => {
    console.log(url, data)
    const api = new UserApi(true)
    return api.request("POST", url, data)
}

export const authDeleteApi = (url) => {
    console.log(url)
    const api = new UserApi(true)
    return api.request("DELETE", url)
}

export const authPatchApi = (url, data) => {
    console.log(url, data)
    const api = new UserApi(true)
    return api.request("PATCH", url, data)
}

export const authPutApi = (url, data) => {
    const api = new UserApi(true)
    console.log(url, data)
    return api.request("PUT", url, data)
}

export const getApi = (url) => {
    const api = new UserApi(false)
    console.log(url)
    return api.request("GET", url)
}

export const postApi = (url, data) => {
    const api = new UserApi(false)
    return api.request("POST", url, data)
}

export const reissueApi = async (url) => {
    const api = new UserApi(false)
    return api.reissue(url)
}

