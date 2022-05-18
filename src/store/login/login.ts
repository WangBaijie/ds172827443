/*
 * @Author: dong shun
 * @LastEditTime: 2022-05-18
 */
import { Module } from "vuex"
import { ILogin } from "./loginType"
import { IRootState } from "../storeType"
import {
  AccountLoginRequest,
  IAccount,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login"
import LocalCache from "@/util/cache"
import { mapMenusToRoutes, mapMenusToPermissions } from "@/util/mapRoute"
import router from "@/router"

const LoginModule: Module<ILogin, IRootState> = {
  namespaced: true,
  state() {
    return {
      id: "",
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      console.log("注册动态路由")
      const routes = mapMenusToRoutes(userMenus)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute("main", route)
      })

      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 请求登录接口
      const loginResult = await AccountLoginRequest(payload)
      const { id, token } = loginResult.data

      commit("changeToken", token)
      LocalCache.setCache("token", token)

      // 2. 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit("changeUserInfo", userInfo)
      LocalCache.setCache("userInfo", userInfo)

      // 3. 请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit("changeUserMenus", userMenus)
      LocalCache.setCache("userMenus", userMenus)

      // 4.跳到首页
      router.push("/main")
    },
    // 页面刷新时重新获取
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache("token")
      if (token) {
        commit("changeToken", token)
      }
      const userInfo = LocalCache.getCache("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }
      const userMenus = LocalCache.getCache("userMenus")
      if (userMenus) {
        commit("changeUserMenus", userMenus)
      }
    }
  }
}

export default LoginModule
