import { unauthRequest } from '../core/request/unauth-request'
import AxiosMockAdapter from 'axios-mock-adapter'

export const registerApi = () => {}

export const loginApi = () => {
  // call api
  // get tokens,
  // update localStorage
  const mock = new AxiosMockAdapter(unauthRequest.request)

  mock.onPost('/login').reply(200, {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
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

  mock.onPost('/refresh').reply(200, {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
  })

  const refreshToken = localStorage.getItem('refreshToken')
  return unauthRequest.post(`${import.meta.env.BASE_URL}refresh`, { token: refreshToken })
}
