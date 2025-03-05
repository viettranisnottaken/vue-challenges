import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import CapitalizeChallenge from './CapitalizeChallenge.vue'

describe('capitalize', () => {
  it('should work', async () => {
    const wrapper = mount(CapitalizeChallenge)

    await wrapper.find('input').setValue('hello')
    // expect(wrapper.find('input').element.value).toBe('Hello')
  })
})
