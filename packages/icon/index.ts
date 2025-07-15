import { App } from "vue";
import ZIcon from "./lib/icon.vue"

ZIcon.install = (app: App) => {
  app.component(ZIcon.name, ZIcon)
}

export default ZIcon