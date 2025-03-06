/* eslint-disable  @typescript-eslint/no-explicit-any */

import { customRef, onUnmounted, ref, watchEffect, type Ref } from 'vue'

export function useLocalStorage(key: string, initialValue: any): Ref<any> {
  const value = ref(localStorage.getItem(key) || initialValue)

  const unwatch = watchEffect(() => {
    localStorage.setItem(key, value.value)
  })

  onUnmounted(() => {
    console.log('unmounted')

    unwatch()
  })

  return value
}

export function useLocalStorage2(key: string, initialValue: any): Ref<any> {
  let value = JSON.parse(localStorage.getItem(key) ?? 'null') ?? initialValue

  return customRef((track, trigger) => {
    return {
      get() {
        track()

        return value
      },
      set(newValue: any) {
        value = newValue
        localStorage.setItem(key, JSON.stringify(newValue))
        trigger()
      },
    }
  })
}
