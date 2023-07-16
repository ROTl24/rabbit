import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  //state数据
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  //actions方法
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
