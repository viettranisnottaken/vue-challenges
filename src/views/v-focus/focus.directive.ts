/**
 * Implement the custom directive
 * Make sure the input element focuses/blurs when the 'state' is toggled
 *
 */

import type { ObjectDirective } from 'vue'

export const vFocus: ObjectDirective<HTMLInputElement, boolean> = {
  mounted(el, { value }) {
    if (value) {
      el.focus()
    }
  },
  beforeUpdate(el, { value }) {
    if (value) {
      el.focus()
    } else {
      el.blur()
    }
  },
}
