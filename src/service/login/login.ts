/*
 * @Author: dong shun
 * @LastEditTime: 2022-05-17
 */
import DsRequest from "../index"

export interface IAccount {
  name: string
  password: string
}

enum UrlMap {
  LoginUrl = "/login",
  UserUrl = "/users/", // 用法: /users/1
  RoleUrl = "/role/" // 用法: role/1/menu
}

interface IDataType<T = any> {
  code: number
  data: T
}

// 登录
export function AccountLoginRequest(Account: IAccount) {
  return DsRequest.post<IDataType>({
    url: UrlMap.LoginUrl,
    data: Account
  })
}

// 用户信息
export function requestUserInfoById(id: number) {
  return DsRequest.get<IDataType>({
    url: UrlMap.UserUrl + id
  })
}

// 用户菜单
export function requestUserMenusByRoleId(id: number) {
  return DsRequest.get<IDataType>({
    url: UrlMap.RoleUrl + id + "/menu"
  })
}
