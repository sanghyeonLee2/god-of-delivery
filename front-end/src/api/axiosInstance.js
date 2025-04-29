import axios from "axios";
import reissue from "./reissueApi";
import { NON_AUTH_URLS } from "@constants/urls";

const API_KEY = process.env.REACT_APP_API;

const axiosInstance = axios.create({
  baseURL: API_KEY,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (NON_AUTH_URLS.includes(config.url)) {
    return config;
  }

  const accessToken = localStorage.getItem("access-token");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
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
