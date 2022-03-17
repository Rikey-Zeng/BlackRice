//注册接口封装
import { post } from "../utils/request";
export const reqRegister = (data) => post("/api/v1/auth/reg", data);
//登录接口
export const reqLogin = (data) => post("/api/v1/auth/login", data);

//新增收货地址
export const reqAddAddress = (params) => post("/api/v1/addresses", params);
//修改收货地址
export const updataOrdersAPI = (id, params) =>
    put("/api/v1/addresses/" + id, params);