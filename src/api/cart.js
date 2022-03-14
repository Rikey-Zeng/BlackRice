import { post, get, del } from "../utils/request";

// 添加购物车
export const addToCart = (id, num = 1) =>
  post("/api/v1/shop_carts", {
    product: id,
    quantity: num,
  });
// 获取购物车列表
export const reqCartListAPI = () => get("/api/v1/shop_carts");

//删除单个
export const reqDelcartAPI = (id) => del(`/api/v1/shop_carts/${id}`);
//删除多个
export const reqDelcartsAPI = (ids) =>
  post("/api/v1/shop_carts/delmany", { ids });
