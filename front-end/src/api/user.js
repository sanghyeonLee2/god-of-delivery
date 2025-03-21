import { authInstance, instance } from "./instance";

class UserApi {
  constructor(isAuth) {
    this.instance = isAuth ? authInstance : instance;
  }

  async request(method, url, data = {}) {
    return this.instance({
      method,
      url,
      data,
    });
  }
}

const authApi = new UserApi(true);
const api = new UserApi(false);

export const authGetApi = (url) => authApi.request("GET", url);
export const authPostApi = (url, data) => authApi.request("POST", url, data);
export const authDeleteApi = (url) => authApi.request("DELETE", url);
export const authPatchApi = (url, data) => authApi.request("PATCH", url, data);
export const authPutApi = (url, data) => authApi.request("PUT", url, data);

export const getApi = (url) => api.request("GET", url);
export const postApi = (url, data) => api.request("POST", url, data);
