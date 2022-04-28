import { createStore } from "vuex"
import LoginModule from "./login/login"
import { IRootState } from "./storeType"

const store = createStore<IRootState>({
  state() {
    return {
      name: "dongshun"
    }
  },
  mutations: {},
  actions: {},
  modules: {
    LoginModule
  }
})
export default store
