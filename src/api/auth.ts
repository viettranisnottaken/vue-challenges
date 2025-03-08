import { unauthRequest } from '../core/request/unauth-request'
import AxiosMockAdapter from 'axios-mock-adapter'

const TTL_DURATION = 1 * 60000 + 5000

export const registerApi = () => {}

export const loginApi = () => {
  // call api
  // get tokens,
  // update localStorage
  const mock = new AxiosMockAdapter(unauthRequest.request)
  const now = new Date().getTime()

  mock.onPost('/login').reply(200, {
    accessToken: `accessToken&ttl=${now + TTL_DURATION}`,
    refreshToken: `refreshToken&ttl=${now + TTL_DURATION}`,
  })

  return unauthRequest.post(`${import.meta.env.BASE_URL}login`, {
    email: 'email',
    password: 'password',
  })
}

export const logoutApi = () => {}

export const refreshApi = () => {
  // call api
  // get tokens,
  // update localStorage

  const mock = new AxiosMockAdapter(unauthRequest.request)
  const now = new Date().getTime()

  mock.onPost('/refresh').reply(200, {
    accessToken: `accessToken&ttl=${now + TTL_DURATION}`,
    refreshToken: `refreshToken&ttl=${now + TTL_DURATION}`,
  })

  const refreshToken = localStorage.getItem('refreshToken')
  return unauthRequest.post(`${import.meta.env.BASE_URL}refresh`, { token: refreshToken })
}
