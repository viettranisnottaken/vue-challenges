import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import DependencyInjection from './DependencyInjection.vue'

describe('Dependency Injection', () => {
  it("should work'", () => {
    const wrapper = mount(DependencyInjection)
    expect(wrapper.vm.$el.textContent).toBe('1')
  })
})
