import httpInstance from '@/utils/http'
//用来执行http请求并返回结果
// export的作用是将当前模块中的变量或者方法暴露给其他模块使用
export function getCategoryAPI() {
    // return的作用是将结果返回给调用者
  return httpInstance({
    //这里的url是相对于baseURL的路径
    url:'/home/category/head'
  })
}