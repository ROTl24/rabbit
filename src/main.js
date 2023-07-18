// import './assets/main.css'

//引入初始化的样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 测试接口函数
// import { getCategory } from './apis/testAPI'
// getCategory().then(res => {
//     console.log(res);
// })


//引入懒加载指令插件并且注册

import { lazyPlugin } from '@/directives/'
const app = createApp(App)

app.use(createPinia())
app.use(router)

//直接全局懒加载 

app.use(lazyPlugin)
app.mount('#app')

// 定义全局指令----懒加载使用到了vueuse

