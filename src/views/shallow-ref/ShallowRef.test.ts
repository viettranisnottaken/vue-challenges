import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ShallowRef from './ShallowRef.vue'

describe('shallowRef', () => {
  it('should work', () => {
    const spy = vi.spyOn(console, 'log')
    mount(ShallowRef)
    expect(spy).toHaveBeenCalled()
  })
})
