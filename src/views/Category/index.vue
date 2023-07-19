<!-- 路由缓存问题产生的原因是什么？
     路由只有参数变化的时候，才会服用组件实例
 -->

<!-- 两种方案都可以解决路由缓存问题，该如何选择？
     在意性能问题，选择onBeforeUpdate,精细化控制，可以保证只更新不同值
     不在意性能的话，选择key，简单粗暴，缺点就是重复不变组件将会重新加载，浪费性能 -->
<script setup>
import { getCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
// import { onUpdated } from "vue";
import { getBannerAPI } from "@/apis/home";
import GoodsItem from "../Home/components/GoodsItem.vue";
import { onBeforeRouteUpdate } from "vue-router";
// 获取数据列表
const categoryData = ref({});
//获取路由参数
//useRoute是vue-router提供的一个钩子函数
//作用：获取路由参数
const route = useRoute();
//不传的话用默认值，传的话用传的值
const getCategory = async (id =route.params.id) => {
  //获取了个路由参数
  //这里的params.id要与category路由中的参数名称一致
  const res = await getCategoryAPI(id);
  categoryData.value = res.result;
};
//页面加载时获取数据
onMounted(() => {
  getCategory();
});
// //当路由参数发生变化时，重新获取数据
// onUpdated(() => {
//   getCategory();
// });


//目标：路由参数变化的时候，可以重新获取数据
// onBeforeRouteUpdate是vue-router提供的钩子函数
// 作用：路由参数发生变化的时候，可以监听到
//to:最新的路由参数
onBeforeRouteUpdate((to) => {

  console.log("路由参数发生变化");

  console.log(to);

  //存在问题：使用最新的路由参数请求最新的路由数据

  //to.params.id传的是最新的路由参数
  getCategory( to.params.id);
});





//获取banner
const bannerList = ref([]);

const getBanner = async () => {
  const res = await getBannerAPI({
    distributionSite: "2",
  });
  console.log(res);
  bannerList.value = res.result;
};

onMounted(() => {
  getBanner();
});


</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <!-- 提供面包屑分隔符为：> -->
        <el-breadcrumb separator=">">
          <!-- 提供面包屑导航项 -->
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in categoryData.children" :key="i.id">
            <RouterLink to="/">
              <img :src="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div
        class="ref-goods"
        v-for="item in categoryData.children"
        :key="item.id"
      >
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
