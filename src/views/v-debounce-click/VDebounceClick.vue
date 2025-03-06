<script setup lang="ts">
import { debounce } from '@/util/common.util'
import type { ObjectDirective } from 'vue'

/**
 * Implement the custom directive
 * Make sure the `onClick` method only gets triggered once when clicked many times quickly
 * And you also need to support the debounce delay time option. e.g `v-debounce-click:ms`
 *
 */

const VDebounceClick: ObjectDirective = {
  mounted(el, { value: cb, arg }) {
    el.addEventListener('click', debounce(cb, parseInt(arg ?? '2000')))
  },
}

function onClick() {
  console.log('Only triggered once when clicked many times quickly')
}
</script>

<template>
  <button v-debounce-click:200="onClick">Click on it many times quickly</button>
</template>
