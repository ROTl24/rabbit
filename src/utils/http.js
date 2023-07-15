//axios基础的封装
import axios from 'axios'
//创建一个新的 Axios 实例，该实例可以用于发送 HTTP 请求
const httpInstance = axios.create({
    //请求的基础路径
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})
//拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})
//导出
export default httpInstance