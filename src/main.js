// import './assets/main.css'

//引入初始化的样式文件
import '@/styles/common.scss'

import { useIntersectionObserver } from '@vueuse/core'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// //测试接口函数
// import { getCategory } from './apis/testAPI'
// getCategory().then(res => {
//     console.log(res);
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义全局指令----懒加载使用到了vueuse

app.directive('img-lazy', {

    // el:指令绑定的元素 img
    // binding:指令的绑定值 binding.value 图片url

    mounted(el, binding) {
        console.log(el, binding.value);
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
             console.log(isIntersecting);
             if (isIntersecting) {
                //进入视口区域
                el.src = binding.value
             }
            },
          )
    }
})
