import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PortalChallenge from './PortalChallenge.vue'

describe('DomPortal', () => {
  it('render to body', () => {
    const wrapper = mount(PortalChallenge)
    expect(wrapper.find('span').exists()).toBeFalsy()
    expect(document.body.innerHTML).toMatchInlineSnapshot('"<span>Hello World</span>"')
  })
})
