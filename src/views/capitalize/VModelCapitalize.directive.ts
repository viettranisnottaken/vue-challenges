import { type ObjectDirective } from 'vue'

export const capitalize = (value: string): string => {
  if (!value) {
    return ''
  }

  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const capitalizeDirective: ObjectDirective = {
  mounted(el) {
    const newValue = capitalize(el.value)

    el.value = newValue
    // makes v-model update again, can cause performance issue
    el.dispatchEvent(new Event('input'))
  },
  async beforeUpdate(el) {
    const newValue = capitalize(el.value)

    el.value = newValue
    // makes v-model update again, can cause performance issue
    el.dispatchEvent(new Event('input'))
  },
}
