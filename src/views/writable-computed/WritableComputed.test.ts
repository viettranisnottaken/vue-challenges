import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import WritableComputed from './WritableComputed.vue'

interface WritableType {
  plusOne: number
  count: number
}

describe('Writable', () => {
  it('Make the `plusOne` writable', () => {
    const wrapper = mount(WritableComputed)
    expect((wrapper.vm as unknown as WritableType).plusOne).toBe(3)
    expect((wrapper.vm as unknown as WritableType).count).toBe(2)
  })
})
