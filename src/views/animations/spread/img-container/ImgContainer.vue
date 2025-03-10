<template>
  <div class="img-container" :style="{ width, height }">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
const { width, height } = defineProps({
  width: {
    type: String,
    default: '700px',
  },
  height: {
    type: String,
    default: '700px',
  },
})
</script>
<style lang=""></style>
