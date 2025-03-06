<script setup lang="ts">
import { ref } from 'vue'
import { vFocus } from './focus.directive'

const state = ref(false)

setInterval(() => {
  state.value = !state.value
}, 2000)
</script>

<template>
  <input v-focus="state" type="text" />
</template>
