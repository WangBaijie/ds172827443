/*
 * @Author: dong shun
 * @LastEditTime: 2022-05-17
 */
/*
 * @Author: dong shun
 * @LastEditTime: 2022-04-27
 */
import { ILogin } from "./login/loginType"
import { ISystemState } from "./system/types"

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  LoginModule: ILogin
  system: ISystemState
}

// 合并两个接口
export type IStoreType = IRootState & IRootWithModule
