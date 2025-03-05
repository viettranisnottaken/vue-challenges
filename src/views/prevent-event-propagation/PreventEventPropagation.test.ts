import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import PreventEventPropagation from './PreventEventPropagation.vue'

describe('prevent-event-propagation', () => {
  it('should work', async () => {
    const result: string[] = []
    console.log = vi.fn((log: string) => {
      result.push(log)
    })

    const wrapper = mount(PreventEventPropagation)

    await wrapper.findAll('div')[1].trigger('click')
    expect(JSON.stringify(result)).toBe('["click2"]')
  })
})
