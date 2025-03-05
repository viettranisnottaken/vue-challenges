<script setup lang="ts">
import { useToggle } from './useToggle'

/**
 * Implement a composable function that toggles the state
 * Make the function work correctly
 */

const [state, toggle] = useToggle(false)
</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">Toggle state</p>
</template>
