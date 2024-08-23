import {authInstance, instance} from "../utils/instance";

export const getUserApi = async (url) => {
    console.log(url)
    try {
        console.log("Asd")
        const res = await instance.get(url)
        console.log(res)
        if (res.data.status === 200) {
            console.log(res.data)
        }
    } catch (err) {
        console.log(err)
    }
}

export const postUserApi = async (url) => {
    try {
        return await authInstance.post(url)
    } catch (err) {
        console.log(err)
    }
}

export const postReissue = async (url) => {
    try {
        return await authInstance.post(url)
    } catch (err) {
        console.log(err)
    }
}