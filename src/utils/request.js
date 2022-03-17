import axios from "axios";
import { Notify } from "vant";
import { getToken } from "./auth";
// 配置全局请求域名和超时时间
const instance = axios.create({
  // baseURL: "http://lanlianhua.work:3009",
  baseURL: "http://122.9.155.12:3009",
  timeout: 10000,
});

// 请求拦截
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

// 响应拦截
instance.interceptors.response.use(
  function (response) {
    return response.data;
    console.log(response);
  },
  async function (error) {
    const { status } = await error.response;
    if (status === 401) {
      Notify({ type: "warning", message: "未授权，请先登录" });
      // 直接打回登录页面
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// 封装get请求
export const get = (url, params) => instance.get(url, { params });

// 封装post请求
export const post = (url, data) => instance.post(url, data);

export const del = (url, data) => instance.delete(url, { data });
export const put = (url, data) => instance.put(url, data);

// export function deletefn(url, params) {
//   return new Promise((resolve, reject) => {
//     instance.delete(url, params)
//       .then(res => {
//         resolve(res.data);
//         // Loading.service(true).close();
//         // Message({message: '请求成功', type: 'success'});
//       })
//       .catch(err => {
//         reject(err.data)
//         // Loading.service(true).close();
//         // Message({message: '加载失败', type: 'error'});
//       })
//   });
// }
// export function put(url, params) {
//   return new Promise((resolve, reject) => {
//     instance.put(url, params)
//       .then(res => {
//         resolve(res.data);
//         // Loading.service(true).close();
//         // Message({message: '请求成功', type: 'success'});
//       })
//       .catch(err => {
//         reject(err.data)
//         // Loading.service(true).close();
//         // Message({message: '加载失败', type: 'error'});
//       })
//   });
// }
export default instance;
