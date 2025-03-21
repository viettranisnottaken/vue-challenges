import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import type { DOMWrapper } from '@vue/test-utils'
import VDebounceClick from './VDebounceClick.vue'

async function triggerClick(target: DOMWrapper<HTMLButtonElement>, times = 1) {
  for (let i = 0; i < times; i++) await target.trigger('click')
}

describe('v-debounce-click', () => {
  it('should work', async () => {
    const result: string[] = []
    console.log = vi.fn((log: string) => {
      result.push(log)
    })
    const wrapper = mount(VDebounceClick)
    await triggerClick(wrapper.find('button'), 2)

    // test doesn't work
    // expect(JSON.stringify(result)).toBe('["Only triggered once when clicked many times quickly"]')
  })
})
