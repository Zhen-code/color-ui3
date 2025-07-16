import { App, Plugin } from "vue";
import ZIcon from "./lib/icon.vue"
export type SFCWithInstall<T> = T & Plugin
export function withInstall<T>(comp:T) {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const {name} = comp as unknown as {name: string}
    app.component(name, comp)
  }
  return comp as SFCWithInstall<T>
}

const Icon = withInstall(ZIcon)

export default Icon


export * from "./lib/icon"

declare module 'vue' {
  export interface GlobalComponents {
    ZIcon: typeof Icon
  }
}

