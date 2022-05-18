import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

const FORMATTIME = "YYYY-MM-DD HH:mm:ss"
// utc的时间格式化
export function UtcFormatTime(utcString: string, format: string = FORMATTIME) {
  return dayjs.utc(utcString).format(format)
}
