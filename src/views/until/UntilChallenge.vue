<script setup lang="ts">
import { ref } from 'vue'
import { until } from './until'

const count = ref(0)

async function increase() {
  count.value = 0
  setInterval(() => {
    count.value++
  }, 1000)
  await until(count).toBe(3)
  console.log(count.value === 3) // Make sure the output is true
}
</script>

<template>
  <p @click="increase">Increase</p>
</template>
