import axiosInstance from "./axiosInstance";

export const authGetApi = (url, config = {}) => axiosInstance.get(url, config);
export const authDeleteApi = (url, config = {}) => axiosInstance.delete(url, config);

export const authPostApi = (url, data = {}, config = {}) => axiosInstance.post(url, data, config);

export const authPutApi = (url, data = {}, config = {}) => axiosInstance.put(url, data, config);

export const authPatchApi = (url, data = {}, config = {}) => axiosInstance.patch(url, data, config);

export const postApi = (url, data = {}, config = {}) => axiosInstance.post(url, data, config);
