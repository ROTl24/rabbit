<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

//获取导航列表的action

import { useCategoryStore } from '@/stores/category'

import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <!-- 路由出口组件 -->
  <!-- 添加key破坏复用机制，强制销毁重建 -->
  <!-- 缺点：页面当中所有的请求的都会重新发送 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <router-view />
  <LayoutFooter />
</template>