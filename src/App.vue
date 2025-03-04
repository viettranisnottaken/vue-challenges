<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'

import Menubar from 'primevue/menubar'

import type { MenuItem } from 'primevue/menuitem'

const router = useRouter()

const items: Ref<MenuItem[]> = ref([
  {
    label: 'Lifecycle hooks',
    icon: 'https://primefaces.org/cdn/primevue//images/dock/appstore.svg',
    command: () => router.push('/lifecycle-hooks'),
  },
])
</script>

<template>
  <Menubar :model="items" />

  <RouterView />
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
