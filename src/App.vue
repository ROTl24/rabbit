<script setup>

// //这个配置项只做联想提示
// import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
   <!-- <el-button type="primary">Primary</el-button> -->


   <!-- 一级路由出口组件 -->

   <RouterView />

   <div class="test">
      test scss
   </div>
</template>

<style scoped lang="scss">
.test{
   color:$priceColor;
}
</style>
