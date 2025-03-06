import { isNil } from '@/util/common.util'
import { ref, type Ref } from 'vue'

export interface UseCounterOptions {
  min?: number
  max?: number
}

export function useCounter(
  initialValue = 0,
  options: UseCounterOptions = {},
): {
  count: Ref<number>
  inc: () => void
  dec: () => void
  reset: () => void
} {
  const count = ref(initialValue)
  const { min, max } = options

  const inc = () => {
    if (!isNil(max) && count.value >= max!) {
      count.value = max!
    } else {
      count.value++
    }
  }

  const dec = () => {
    if (!isNil(min) && count.value <= min!) {
      count.value = min!
    } else {
      count.value--
    }
  }

  const reset = () => {
    count.value = initialValue
  }

  return {
    count,
    inc,
    dec,
    reset,
  }
}
