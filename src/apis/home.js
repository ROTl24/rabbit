import httpInstance from '@/utils/http'

//获取Banner

export function getBannerAPI() {
  return httpInstance({
    url:'/home/banner'
  })
}