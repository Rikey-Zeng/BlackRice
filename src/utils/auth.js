import Cookies from "js-cookie";

const Token = "token"; // 定义一个常量
// 生成cookie
export function setToken(token) {
  Cookies.set(Token, token);
}

// 获取cookie
export function getToken() {
  return Cookies.get(Token);
}

// 删除

export function removeToken() {
  Cookies.remove(Token);
}
