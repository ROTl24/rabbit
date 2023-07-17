import httpInstance from '@/utils/http'

//获取Banner

export function getBannerAPI() {
  return httpInstance({
    url:'/home/banner'
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function findNewAPI() {
  return httpInstance({
    url:'/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
 
export function findHotAPI() {
  return httpInstance({
    url:'/home/hot'
  })
}