import axiosInstance from "./axiosInstance";
import { API_URLS } from "../constants/urls";

const reissue = async (originalRequest) => {
  try {
    originalRequest._retry = true;

    const reissueResult = await axiosInstance(API_URLS.AUTH.REISSUE, {
      refreshToken: localStorage.getItem("refresh-token"),
      accessToken: localStorage.getItem("access-token"),
    });

    const { accessToken } = reissueResult.data;
    localStorage.setItem("access-token", accessToken);

    originalRequest.headers.Authorization = `Bearer ${accessToken}`;

    return axiosInstance(originalRequest);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default reissue;
