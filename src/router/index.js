//createRouter()创建router实例对象
//createWebHistory()创建history路由模式
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/index.vue'
import Layout from '../views/Layout/index.vue'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'
import SubCategory from '../views/SubCategory/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置path和component对应关系的位置
  routes: [
   {
    path:'/',
    component:Layout,
    //二级路由配置
    children:[
      {
        //默认的时候路由用滞空，访问上一个页面时这个也会渲染
        path:'',
        component:Home,
      },
      {
        path:'category/:id',
        component:Category,
      },
      {
        path:'category/sub/:id',
        component:SubCategory,
      }
    ]
   },
   {
    path:'/login',
    component:Login,
   }
  ],
  //路由滚动行为定制
  scrollBehavior(){
    return {
      top:0,
    }
  }
})
export default router
