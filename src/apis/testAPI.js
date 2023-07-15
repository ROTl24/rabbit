import httpInstance from "@/utils/http";

//用来执行http请求并返回结果
export function getCategory(){
    return httpInstance({
        url: 'home/category/head'
    })
}
