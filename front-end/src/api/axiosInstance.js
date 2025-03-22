import axios from "axios";
import reissue from "./reissueApi";
import { API_URLS } from "../constants/urls";

const API_KEY = process.env.REACT_APP_API;
//const API_KEY = process.env.REACT_APP_JSON_SERVER// 테스트 용

const axiosInstance = axios.create({
  baseURL: API_KEY,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access-token");
  if (config.url === API_URLS.AUTH.REISSUE) {
    return config;
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (err) => {
    const originalRequest = err.config;

    if (!err.response) {
      return Promise.reject(err);
    }

    if (originalRequest._retry) {
      return Promise.reject(err);
    }

    if (!originalRequest.headers?.Authorization) {
      return Promise.reject(err);
    }

    if (err.response.status === 401) {
      return reissue(originalRequest);
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
