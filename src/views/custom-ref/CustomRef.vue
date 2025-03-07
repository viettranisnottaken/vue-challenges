<script setup lang="ts">
import { debounce } from '@/util/common.util'
import { customRef, watch, type Ref } from 'vue'

/**
 * Implement the function
 */
function useDebouncedRef(value, delay = 200): Ref<string> {
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set: debounce((newValue) => {
        value = newValue
        trigger()
      }, delay),
    }
  })
}

const text = useDebouncedRef('hello')

/**
 * Make sure the callback only gets triggered once when entered multiple times in a certain timeout
 */
watch(text, (value) => {
  console.log(value)
})
</script>

<template>
  <input v-model="text" />
</template>
