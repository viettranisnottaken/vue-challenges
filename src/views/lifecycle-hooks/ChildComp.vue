// Child.vue

<script setup lang="ts">
import { onMounted, inject, type Ref, onBeforeUnmount } from 'vue'

const timer = inject<Ref<number>>('timer')
const count = inject<Ref<number>>('count')

onMounted(() => {
  if (count?.value === null || count?.value === undefined || !timer) {
    console.log(count, timer)

    return
  }

  // The timer will work abnormally when the child component is toggled. Lets fix it.
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})

// Need clean up
onBeforeUnmount(() => {
  clearInterval(timer?.value)
})
</script>

<template>
  <div>
    <p>Child Component: {{ count }}</p>
  </div>
</template>
