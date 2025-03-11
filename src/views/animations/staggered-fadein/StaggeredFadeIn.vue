<script setup lang="ts">
import ListItem from './ListItem.vue'

const items = Array.from({ length: 10 }, (_, i) => i + 1)
const staggerAmount = (index: number) => index * 0.1
</script>
<template>
  <ListItem
    v-for="(item, index) in items"
    :key="item"
    class="fadeInLeft"
    :style="{ 'animation-delay': `${staggerAmount(index)}s` }"
  ></ListItem>
</template>
<style lang="scss">
@use './animation.scss';
</style>
