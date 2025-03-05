import { ref, type Ref } from 'vue'

export function useToggle(defaultState: boolean): [state: Ref<boolean>, toggle: () => void] {
  const state = ref(defaultState)

  const toggle = () => {
    state.value = !state.value
  }

  return [state, toggle]
}
