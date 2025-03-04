<script setup lang="ts">
import { provide, ref } from 'vue'
import Button from 'primevue/button'
import ChildComp from './ChildComp.vue'
const count = ref(0)
const timer = ref<unknown>(null)

provide('count', count)
provide('timer', timer)

const isHidden = ref(false)

const toggleChild = () => {
  isHidden.value = !isHidden.value
}
</script>

<template>
  <div class="d-flex flex-col items-center">
    <ChildComp v-if="!isHidden"></ChildComp>

    <Button label="Toggle" @click="toggleChild" />
  </div>
</template>
