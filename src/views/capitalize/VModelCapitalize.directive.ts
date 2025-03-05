import { nextTick, type ObjectDirective } from 'vue'

const capitalize = (value: string): string => {
  if (!value) {
    return ''
  }

  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const capitalizeDirective: ObjectDirective = {
  mounted(el, { instance }) {
    const newValue = capitalize(el.value)

    el.value = newValue
    instance?.$emit('update:modelValue', newValue)
  },
  async beforeUpdate(el, { instance }) {
    const newValue = capitalize(el.value)
    await nextTick()

    el.value = newValue

    instance?.$emit('update:modelValue', newValue)
  },
}
