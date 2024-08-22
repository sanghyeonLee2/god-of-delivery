import {instance} from "../utils/instance";

export const getUserApi = async (url) => {
    return await instance.get(url)
}

export const postUserApi = async (url) => {
    return await instance.post(url)
}