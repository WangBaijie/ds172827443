import { App } from "vue"
import { UtcFormatTime } from "../util/formatTime"

export default function globalFn(app: App) {
  app.config.globalProperties.$globalFN = {
    formatTime(value: string) {
      return UtcFormatTime(value)
    }
  }
}
