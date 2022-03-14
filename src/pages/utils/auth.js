import Cookies from "js-cookie";
const Token = "token";
export function setToken(token) {
  Cookies.set(Token, token);
}
export function getToken() {
  return Cookies.get(Token);
}
export function removeToken() {
  Cookies.remove(Token);
}
