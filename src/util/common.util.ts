/* eslint-disable  @typescript-eslint/no-explicit-any */

export function isNil(value: any): boolean {
  return value === null || value === undefined
}

export function debounce(cb: () => any, duration = 300): () => any {
  let timer

  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = window.setTimeout(() => {
      cb(...args)
      timer = null
    }, duration)
  }
}
