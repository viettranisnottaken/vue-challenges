import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import VueKinesis from 'vue-kinesis'
import { capitalizeDirective } from './views/capitalize/VModelCapitalize.directive'
import { vFocus } from './views/v-focus/focus.directive'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(createPinia())
app.use(router)
app.use(VueKinesis)
app.directive('capitalize', capitalizeDirective)
app.directive('focus', vFocus)

app.mount('#app')
