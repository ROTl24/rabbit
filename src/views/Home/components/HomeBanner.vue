<!-- banner模块是一个轮播图模块，需要在首页和分类页都使用，所以我们把它抽离出来，放在src\views\Home\components\HomeBanner.vue中。 -->

<script setup>
import { getBannerAPI } from '@/apis/home'
import { ref, onMounted } from 'vue'
const bannerList = ref([])

const getBanner = async () => {
  const res = await getBannerAPI()
  
  bannerList.value = res.result
}

onMounted(() => {
    getBanner()
})


</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>