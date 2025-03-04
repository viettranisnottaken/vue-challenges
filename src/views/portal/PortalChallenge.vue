<script setup lang="ts">
const msg = 'Hello World'
</script>

<template>
  <!-- Renders it to a child element of the `body` -->
  <teleport to="body">
    <span>{{ msg }}</span>
  </teleport>
</template>
