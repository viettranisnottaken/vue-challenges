<template>
  <div class="flex gap-4 mt-4">
    <Button label="Login" @click="login" />
    <Button label="Refresh" @click="refresh" />
    <Button label="Request" @click="request200" />
    <Button label="Logout" @click="logOut" />
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import {
  login as loginService,
  logout,
  refresh as refreshService,
} from '@/core/services/auth.service'
import { getUsers } from '@/core/services/user.service'

const login = () => {
  loginService()
}

const refresh = () => {
  refreshService()
}

const request200 = () => {
  getUsers()
}

const logOut = () => {
  logout()
}
</script>
<style lang=""></style>
