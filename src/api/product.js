import { del, get, put } from "../utils/request";

export const reqBanners = () => get("/api/v1/products");
//获取商品接口
export const reqProducts = (data) => get("/api/v1/products", data);
// 获取商品详情
export const reqProductById = (id) => get("/api/v1/products/" + id);
//封装分类详情
export const reqProduct_catelist = (data) =>
    get(`/api/v1/products?name=${data}`);
//获取分类列表
export const reqProduct_categories = () => get("/api/v1/product_categories");
//获取用户信息
export const reqInfo = () => get("/api/v1/users/info");

//收货地址接口
export const reqProductAddresses = (page) =>
    get("/api/v1/addresses?page=" + page);
//新增收获地址
export const reqaddres = () => get("/api/v1/addresses");

//获取单个地址
export const getaddressAPI = (id) => get("/api/v1/addresses/" + id);
//删除收货地址接口
export const deladdressAPI = (id) => del("/api/v1/addresses/" + id);
//修改地址
export const updataOrdersAPI = (id, params) =>
    put("/api/v1/addresses/" + id, params);