import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import DomUpdateFlush from './DomUpdateFlush.vue'

describe('next-dom-update', () => {
  it("should work'", async () => {
    let printLog = ''
    console.log = vi.fn((log: string) => {
      printLog = log?.toString()?.trim()
    })
    const wrapper = mount(DomUpdateFlush)

    expect(wrapper.text()).toMatchInlineSnapshot('"0"')

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.text()).toMatchInlineSnapshot('"1"')
    expect(printLog).toMatchInlineSnapshot('"true"')
  })
})
