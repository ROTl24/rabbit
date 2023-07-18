//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        //懒加载指令逻辑
        app.directive('img-lazy', {

            // el:指令绑定的元素 img
            // binding:指令的绑定值 binding.value 图片url
        
            mounted(el, binding) {
                console.log(el, binding.value);
                //调出一个stop方法，可以停止监听
                //解构方式
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                     console.log(isIntersecting);
                     if (isIntersecting) {
                        //进入视口区域
                        el.src = binding.value
                        stop()
                     }
                    },
                  )
            }
        })
    }
}
//我想要在上述代码的基础上，解决重复监听的问题，请帮我在下面输出一个函数，这个函数可以解决重复监听的问题
// function useIntersectionObserver(el, callback) {
//     let observer = new IntersectionObserver(callback)
//     observer.observe(el)
//     return () => {
//         observer.unobserve(el)
//         observer.disconnect()
//     }
// }
// export { useIntersectionObserver }

