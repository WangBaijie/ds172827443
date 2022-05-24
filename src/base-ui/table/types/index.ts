/*
 * @Author: dong shun
 * @LastEditTime: 2022-05-24
 */
interface ITable {
  prop?: string
  label: string
  minWidth?: string
  slotName?: string
}
export interface ITableData {
  leftHeaderTitle?: string
  propsList: ITable[]
  showIndexColumn?: boolean
  showSelectColumn?: boolean
}
