<!-- Best practice is computed and watch  -->
<!-- Solution is online but not good for reusability  -->
<!-- Directive is not Vue's best suit, so maybe stay away from that -->

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
// import { capitalize } from './VModelCapitalize.directive'
const text = ref('')
// const capitalized = computed(() => {
//   return capitalize(text.value)
// })

onMounted(() => {
  text.value = 'hello'
})

watch(text, () => {
  console.log(text.value)
})
</script>

<template>
  <!-- <input type="text" v-model.capitalize="value" /> -->
  <input type="text" v-model="text" v-capitalize />
  <!-- <input type="text" v-model="capitalized" /> -->
</template>
