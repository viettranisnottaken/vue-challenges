<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
const value = ref('')

onMounted(() => {
  value.value = 'hello'
})

watch(value, () => {
  console.log(value.value)
})
</script>

<template>
  <!-- <input type="text" v-model.capitalize="value" /> -->
  <input type="text" v-model="value" v-capitalize />
</template>
