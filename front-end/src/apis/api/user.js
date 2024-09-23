import {authInstance, instance} from "../utils/instance";


class UserApi {
    constructor(isAuth) {
        this.instance = isAuth ? authInstance() : instance()
    }

    requestMethod(method, url) {
        return this.instance({
            method,
            url,
        })
    }

    async request(method, url) {
        try {
            return await this.requestMethod(method, url)
        } catch (err) {
            console.log(err)
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

export const authPostApi = (url) => {
    const api = new UserApi(true)
    return api.request("POST", url)
}

export const getApi = (url) => {
    const api = new UserApi(false)
    return api.request("GET", url)
}

export const postApi = (url) => {
    const api = new UserApi(false)
    return api.request("POST", url)
}

export const reissueApi = async (url) => {
    const api = new UserApi(false)
    return api.reissue(url)
}

