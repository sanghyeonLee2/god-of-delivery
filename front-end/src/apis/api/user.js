import {authInstance, instance} from "../utils/instance";

export const getUserApi = async (url) => {
    try {
        const res = await instance.get(url)
        if (res.status === 200) {
            return res.data.available
        }
    } catch (err) {
        console.log(err)
    }
}

export const postUserApi = async (url) => {
    try {
        return await instance.post(url)
    } catch (err) {
        console.log(err)
    }
}

export const postReissue = async (url) => {
    try {
        return await authInstance.post(url, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("refresh-token")}`
            }
        })
    } catch (err) {
        console.log(err, "여기")
    }
}