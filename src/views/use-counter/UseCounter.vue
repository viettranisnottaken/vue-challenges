<script setup lang="ts">
import { useCounter } from './useCounter'

/**
 * Implement the composable function
 * Make sure the function works correctly
 */

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 })
</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="inc">inc</button>
  <button @click="dec">dec</button>
  <button @click="reset">reset</button>
</template>
