import {get } from "../utils/request";

export const reqBanners = () => get("/api/v1/products");
//获取商品接口
export const reqProducts = (data) => get("/api/v1/products", data);
// 获取商品详情
export const reqProductById = (id) => get("/api/v1/products/" + id);
//封装分类详情
export const reqProduct_catelist = (data) => get(`/api/v1/products?name=${data}`)
    //获取分类列表
export const reqProduct_categories = () => get("/api/v1/product_categories");
//获取用户信息
export const reqInfo = () => get("/api/v1/users/info");

//收货地址接口
export const reqProductAddresses = (page) =>
    get("/api/v1/addresses?page=" + page);