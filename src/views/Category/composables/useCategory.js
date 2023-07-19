//封装分类数据相关代码
import { getCategoryAPI } from "@/apis/category";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
import { ref, onMounted } from "vue";

export function useCategory() {
    // 获取数据列表
    const categoryData = ref({});
    //获取路由参数
    //useRoute是vue-router提供的一个钩子函数
    //作用：获取路由参数
    const route = useRoute();
    //不传的话用默认值，传的话用传的值
    const getCategory = async (id = route.params.id) => {
        //获取了个路由参数
        //这里的params.id要与category路由中的参数名称一致
        const res = await getCategoryAPI(id);
        categoryData.value = res.result;
    };
    //页面加载时获取数据
    onMounted(() => {
        getCategory();
    });
    // 当路由参数发生变化时，重新获取数据
    // onUpdated(() => {
    //   getCategory();
    // });


    //目标：路由参数变化的时候，可以重新获取数据
    // onBeforeRouteUpdate是vue-router提供的钩子函数
    // ! 作用：路由参数发生变化的时候，可以监听到
    //to:最新的路由参数
    onBeforeRouteUpdate((to) => {

        console.log("路由参数发生变化");

        console.log(to);

        //存在问题：使用最新的路由参数请求最新的路由数据

        //to.params.id传的是最新的路由参数
        getCategory(to.params.id);
    });
    return{
        categoryData
    }
}