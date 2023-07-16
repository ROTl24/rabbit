<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <!-- 路由出口组件 -->
  <RouterView />
  <LayoutFooter />
</template>