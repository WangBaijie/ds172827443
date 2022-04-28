/*
 * @Author: dong shun
 * @LastEditTime: 2022-04-28
 */
import DsRequest from "../index"

export interface IAccount {
  name: string
  password: string
}
enum LoginAPI {
  url = "/login"
}
export function AccountLoginRequest(Account: IAccount) {
  return DsRequest.post({
    url: LoginAPI.url,
    data: Account
  })
}
