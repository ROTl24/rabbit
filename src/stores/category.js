import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {
    //导航列表的数据管理
    // 定义一个空数组，用来存放分类数据,
    const categoryList = ref([])

    // 调用api获取分类数据，存放到res当中。
    const getCategory = async () => {
        const res = await getCategoryAPI()
        // !查看res的结果
        // console.log(res)
        //选择内容存放进categoryList当中
        categoryList.value = res.result
    }

    return{
        categoryList,
        getCategory
    }
})
