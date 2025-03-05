import { watchEffect, type Ref } from 'vue'

export function until(value: Ref<number>): { toBe: (value: number) => Promise<boolean> } {
  async function toBe(v: number): Promise<boolean> {
    return new Promise((resolve) => {
      const unwatch = watchEffect(() => {
        if (value.value === v) {
          resolve(true)
          unwatch()
        }
      })
    })
  }

  return { toBe }
}
