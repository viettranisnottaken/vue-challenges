import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import type { DOMWrapper } from '@vue/test-utils'
import UseCounter from './UseCounter.vue'

async function triggerClick(target: DOMWrapper<HTMLButtonElement>, times = 1) {
  for (let i = 0; i < times; i++) await target.trigger('click')
}

describe('useCounter', () => {
  let wrapper, incBtn, decBtn, resetBtn, text

  beforeEach(() => {
    wrapper = mount(UseCounter)
    incBtn = wrapper.findAll('button')[0]
    decBtn = wrapper.findAll('button')[1]
    resetBtn = wrapper.findAll('button')[2]
    text = wrapper.find('p')
  })

  it('should work', async () => {
    expect(text.text()).toBe('Count: 0')
    await triggerClick(incBtn, 4)
    expect(text.text()).toBe('Count: 4')
    await triggerClick(decBtn, 2)
    expect(text.text()).toBe('Count: 2')
  })

  it('support min and max', async () => {
    expect(text.text()).toBe('Count: 0')
    await triggerClick(incBtn, 15)
    expect(text.text()).toBe('Count: 10')
    await triggerClick(decBtn, 20)
    expect(text.text()).toBe('Count: 0')
  })

  it('support reset', async () => {
    expect(text.text()).toBe('Count: 0')
    await triggerClick(incBtn, 3)
    expect(text.text()).toBe('Count: 3')
    await triggerClick(resetBtn)
    expect(text.text()).toBe('Count: 0')
  })
})
