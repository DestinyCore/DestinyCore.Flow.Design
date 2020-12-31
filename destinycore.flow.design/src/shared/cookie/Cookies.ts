import Cookies from "js-cookie";

/**
 * 获取cookie
 * @param _key 根据键
 */
export const getcookie = (_key: string) => {
  return Cookies.get(_key);
}
/**
 * 写入cookie
 * @param key 键 
 * @param value 值
 */
export const setcookie = (key: string, value: string) => {
  Cookies.set(key, value);
}

export const removecookie = (key: string) => {
  Cookies.remove(key);
}


