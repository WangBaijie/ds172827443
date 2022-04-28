/*
 * @Author: dong shun
 * @LastEditTime: 2022-04-28
 */
import { Module } from "vuex"
import { ILogin } from "./loginType"
import { IRootState } from "../storeType"
import { AccountLoginRequest, IAccount } from "@/service/login/login"
const LoginModule: Module<ILogin, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {}
    }
  },
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const res = await AccountLoginRequest(payload)
      console.log(res)
    }
  }
}

export default LoginModule
