import { get, post } from "../utils/request";
//订单提交   如果没有收货人，需要跳转到添加收货人信息页面进行填写
export const reqSaveOrderAPI = (data) => post("/api/v1/orders", data);
//获取订单列表
export const reqOrderlist = () => get("/api/v1/orders");
