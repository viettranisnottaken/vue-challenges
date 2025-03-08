import { loginApi, logoutApi, refreshApi } from '@/api/auth'
import { authRequest } from '../request/auth-request'

export function isAuthenticated(): boolean {
  return true
}

export async function login() {
  const { accessToken, refreshToken } = (await loginApi()).data

  authRequest.setToken(accessToken)
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)

  return { accessToken, refreshToken }
}

export async function refresh() {
  const { accessToken, refreshToken } = (await refreshApi()).data

  authRequest.setToken(accessToken)
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)

  return { accessToken, refreshToken }
}

export function logout() {
  logoutApi()
  authRequest.setToken(undefined)
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}
