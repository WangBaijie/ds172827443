export function dateFormat(
  time: Date | number | string,
  cFormat?: string
): string {
  if (arguments.length === 0) {
    return ""
  }

  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}"
  let date: Date
  if (typeof time === "object") {
    date = time
  } else {
    let tempTime = 0
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      tempTime = parseInt(time, 0)
    }
    if (typeof time === "number") {
      tempTime = time
      if (time.toString().length === 10) {
        tempTime = time * 1000
      }
    }
    date = new Date(tempTime)
  }

  const formatObj: { [key: string]: number } = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    const value = formatObj[key]
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value]
    }
    if (result.length > 0 && value < 10) {
      return "0" + value
    }
    return value + "" || "0"
  })
  return timeStr
}
