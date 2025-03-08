import { authRequest } from '@/core/request/auth-request'
import AxiosMockAdapter from 'axios-mock-adapter'

export const getUsersApi = () => {
  const mock = new AxiosMockAdapter(authRequest.request)

  mock.onGet('/users').reply(function (config) {
    if (!config.headers?.Authorization?.includes('Bearer accessToken')) {
      return [
        401,
        {
          error: 'error',
        },
      ]
    }

    return [
      200,
      [
        {
          id: 1,
          name: 'name',
        },
        {
          id: 2,
          name: 'name2',
        },
      ],
    ]
  })

  return authRequest.get(`${import.meta.env.BASE_URL}users`)
}
