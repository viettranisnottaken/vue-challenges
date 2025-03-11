import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LifecycleHooks from '@/views/lifecycle-hooks/LifecycleHooks.vue'
import DomUpdateFlush from '@/views/dom-update-flush/DomUpdateFlush.vue'
import PortalChallenge from '@/views/portal/PortalChallenge.vue'
import DynamicStyles from '@/views/dynamic-styles/DynamicStyles.vue'
import CapitalizeChallenge from '@/views/capitalize/CapitalizeChallenge.vue'
import UseLocalStorage from '@/views/use-local-storage/UseLocalStorage.vue'
import VFocus from '@/views/v-focus/VFocus.vue'
import VDebounceClick from '@/views/v-debounce-click/VDebounceClick.vue'
import AuthComponent from '@/views/auth/AuthComponent.vue'
import SpreadAnim from '@/views/animations/spread/SpreadAnim.vue'
import ParallaxAnimation from '@/views/animations/parallax/ParallaxAnimation.vue'
import PovBg from '@/views/animations/pov-background/PovBg.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/lifecycle-hooks',
      name: 'Lifecycle Hooks',
      component: LifecycleHooks,
    },
    {
      path: '/dom-update-flush',
      name: 'Next Dom Update Flush',
      component: DomUpdateFlush,
    },
    {
      path: '/portal',
      name: 'Portal',
      component: PortalChallenge,
    },
    {
      path: '/dynamic-styles',
      name: 'Dynamic Styles',
      component: DynamicStyles,
    },
    {
      path: '/capitalize',
      name: 'Capitalize',
      component: CapitalizeChallenge,
    },
    {
      path: '/use-local-storage',
      name: 'Use Local Storage',
      component: UseLocalStorage,
    },
    {
      path: '/v-focus',
      name: 'v-focus',
      component: VFocus,
    },
    {
      path: '/v-debounce-click',
      name: 'v-debounce-click',
      component: VDebounceClick,
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AuthComponent,
    },
    {
      path: '/spread-animation',
      name: 'Spread Animation',
      component: SpreadAnim,
    },
    {
      path: '/parallax-animation',
      name: 'Parallax Animation',
      component: ParallaxAnimation,
    },
    {
      path: '/pov-background-animation',
      name: 'Background Animation',
      component: PovBg,
    },
  ],
})

export default router
