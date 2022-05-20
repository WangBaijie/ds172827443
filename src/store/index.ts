import { createStore, Store, useStore as useVuexStore } from "vuex"
import LoginModule from "./login/login"
import systemModule from "./system/system"
import { IRootState, IStoreType } from "./storeType"

const store = createStore<IRootState>({
  state() {
    return {
      name: "dongshun",
      age: 16
    }
  },
  mutations: {},
  actions: {},
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
