<script setup lang="ts">
import { inject } from 'vue'

const count = inject('count')
</script>

<template>
  {{ count }}
</template>
