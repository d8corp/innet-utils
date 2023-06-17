import { type Plugin, useApp } from 'innet'

export const call: Plugin = () => () => {
  useApp<Function>()()
}
