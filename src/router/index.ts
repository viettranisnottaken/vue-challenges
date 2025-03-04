import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LifecycleHooks from '@/views/lifecycle-hooks/LifecycleHooks.vue'
import DomUpdateFlush from '@/views/dom-update-flush/DomUpdateFlush.vue'

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
  ],
})

export default router
