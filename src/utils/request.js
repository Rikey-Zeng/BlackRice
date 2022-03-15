import axios from "axios";
import { Notify } from "vant";
import { getToken } from "./auth";
// 配置全局请求域名和超时时间
console.log(111, getToken());
console.log(111, localStorage.getItem("token"));

const instance = axios.create({
    baseURL: "http://122.9.155.12:3009",
    // baseURL: "http://localhost:3009",
    timeout: 5000,

    baseURL: "http://122.9.155.12:3009",
    timeout: 5000,

});

// 请求拦截
instance.interceptors.request.use(
    function(config) {
        if (getToken()) {
            config.headers.authorization = `Bearer ${getToken()}`;
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

// 响应拦截
instance.interceptors.response.use(
    function(response) {
        return response.data;
    },
    function(error) {
        console.log(error);
        if (error.response) {
            let { status } = error.response;
            if (status === 401) {
                Notify({ type: "warning", message: "未授权，请先登录" });
                // 直接打回登录页面
                // window.location.href = "#/login";
                window.location.href = "/login";
            }
            return Promise.reject(error);
        }
    }
);

// 封装get请求
export const get = (url, params) => instance.get(url, { params });

// 封装post请求
export const post = (url, data) => instance.post(url, data);


// 封装delete请求
export const del = (url, params) => instance.delete(url, { params });

export default instance;