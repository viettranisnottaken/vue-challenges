<script setup lang="ts">
defineProps({
  type: {
    type: String,
    validator(value: string): boolean {
      return ['primary', 'ghost', 'dashed', 'link', 'text', 'default'].includes(value)
    },
    default: 'default',
  },
})
</script>

<template>
  <button>Button</button>
</template>
