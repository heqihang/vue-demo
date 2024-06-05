import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/reset.css';

createApp(App).use(createPinia()).use(router).use(Antd).mount('#app')
