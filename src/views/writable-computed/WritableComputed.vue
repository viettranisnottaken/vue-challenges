<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(1)
const plusOne = computed({
  get() {
    return count.value + 1
  },
  set() {
    count.value++
  },
})

/**
 * Make the `plusOne` writable.
 * So that we can get the result `plusOne` to be 3, and `count` to be 2.
 */

plusOne.value++
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ plusOne }}</p>
  </div>
</template>
