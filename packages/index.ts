import { App } from "vue";

import Button from "./button/index";

import Icon from "icon";
const components = [ // 引入所有组件
    Button,
    Icon
];
const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name, component);
    })
}
export default {
    install // 导出install方法
}

