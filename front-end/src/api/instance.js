import axios from "axios";
import reissue from "./reissueApi";

const API_KEY = process.env.REACT_APP_API;
//const API_KEY = process.env.REACT_APP_JSON_SERVER// 테스트 용

export const instance = axios.create({
  baseURL: API_KEY,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authInstance = axios.create({
  baseURL: API_KEY,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  },
});

authInstance.interceptors.response.use(
  (response) => response,
  (err) => {
    const originalRequest = err.config;

    if (!err.response) {
      return Promise.reject(err);
    }

    if (originalRequest._retry) {
      return Promise.reject(err);
    }
    if (err.response.status === 401) {
      return reissue(originalRequest);
    }

    return Promise.reject(err);
  }
);
