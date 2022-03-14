import axios from "axios";
import { Notify } from "vant";
import { getToken } from "./auth";
const instance = axios.create({
  baseURL: "http://lanlianhua.work:3009",
  timeout: 5000,
});
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    if (getToken()) {
      config.headers.authorization = `Bearer ${getToken()}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const { status } = error.response;
    if (status === 401) {
      Notify({ type: "warning", message: "未授权，请先登录" });
      // 直接打回登录页面
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

//封装get请求
export const get = (url, params) => instance.get(url, { params });
//post请求
export const post = (url, data) => instance.post(url, data);
export const del = (url, params) => instance.delete(url, { params });
export default instance;
