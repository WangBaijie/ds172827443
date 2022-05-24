import { createStore, Store, useStore as useVuexStore } from "vuex"
import LoginModule from "./login/login"
import systemModule from "./system/system"
import { IRootState, IStoreType } from "./storeType"
import { getPageListData } from "@/service/login/login"

const store = createStore<IRootState>({
  state() {
    return {
      name: "dongshun",
      age: 16,
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data

      // 2.保存数据
      commit("changeEntireDepartment", departmentList)
      commit("changeEntireRole", roleList)
    }
  },
  modules: {
    LoginModule,
    systemModule
  }
})

export function setupStore() {
  store.dispatch("LoginModule/loadLocalLogin")
}

// Vuex 与 TS 兼容性差的问题,改进了一下
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
