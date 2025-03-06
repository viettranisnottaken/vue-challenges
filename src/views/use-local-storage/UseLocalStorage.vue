<script setup lang="ts">
import { useLocalStorage, useLocalStorage2 } from './useLocalStorage'

/**
 * Implement the composable function
 * Make sure the function works correctly
 */

const counter = useLocalStorage2('counter', 0)

// We can get localStorage by triggering the getter:
console.log(counter.value)

// And we can also set localStorage by triggering the setter:

const update = () => counter.value++
</script>

<template>
  <p>Counter: {{ counter }}</p>
  <button @click="update">Update</button>
</template>
