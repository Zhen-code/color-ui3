import {createApp} from 'vue';
import COLORUI3 from './packages/index';

import App from './App.vue'
createApp(App).use(COLORUI3).mount('#app'); // 入口文件中使用组件即可.use(COLORUI3)