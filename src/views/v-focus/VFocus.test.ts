import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import VFocus from './VFocus.vue'

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

describe('v-focus', () => {
  it('should work', async () => {
    const wrapper = mount(VFocus, {
      attachTo: document.body,
    })

    expect(wrapper.find('input').element).not.toBe(document.activeElement)
    await delay(3000)
    expect(wrapper.find('input').element).toBe(document.activeElement)
  })
})
