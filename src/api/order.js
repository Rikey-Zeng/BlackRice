import {get, post, del } from "../utils/request";
//订单提交   如果没有收货人，需要跳转到添加收货人信息页面进行填写
export const reqSaveOrderAPI = (data) => post("/api/v1/orders", data);
//获取订单列表
export const reqOrderslist = () => get("/api/v1/orders");
// 获取订单详情
export const reqGetOrder = (id) => get("/api/v1/orders/" + id);

// 删除订单  根据 id 删除订单详情
export const reqDelmanydel = (id) => del(`/api/v1/orders/${id}`);



// 删除多个订单  
export const reqDelmanydels = (ids) => post("/api/v1/orders/delmany", ids);