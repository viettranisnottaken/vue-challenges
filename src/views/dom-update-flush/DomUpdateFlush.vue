<script setup lang="ts">
import { nextTick, ref } from 'vue'

const count = ref(0)
const counter = ref<HTMLButtonElement>()

async function increment() {
  count.value++

  /**
   * DOM is not yet updated, how can we make sure that the DOM gets updated
   * Make the output be true
   */
  await nextTick()

  // try to query DOM
  // updates are batched, so no DOM update yet
  // use nextTick to wait
  console.log(+(counter?.value?.textContent ?? 0) === 1)
}
</script>

<template>
  <button ref="counter" @click="increment">
    {{ count }}
  </button>
</template>
