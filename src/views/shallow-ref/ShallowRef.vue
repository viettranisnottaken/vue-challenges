<script setup lang="ts">
import { shallowRef, triggerRef, watch } from 'vue'

const state = shallowRef({ count: 1 })

// Does NOT trigger
watch(
  state,
  () => {
    console.log('State.count Updated')
  },
  { deep: true },
)

/**
 * Modify the code so that we can make the watch callback trigger.
 */
state.value.count = 2

triggerRef(state)
</script>

<template>
  <div>
    <p>
      {{ state.count }}
    </p>
  </div>
</template>
