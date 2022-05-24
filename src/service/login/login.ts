/*
 * @Author: dong shun
 * @LastEditTime: 2022-05-24
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

// 获取列表数据
export function getPageListData(url: string, queryInfo: any) {
  return DsRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// 创建新用户
export function createPageData(url: string, newData: any) {
  return DsRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

// 编辑用户信息
export function editPageData(url: string, editData: any) {
  return DsRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}

// url: /users/id 根据ID删除用户
export function deletePageData(url: string) {
  return DsRequest.delete<IDataType>({
    url: url
  })
}
