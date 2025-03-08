import type { CreateAxiosDefaults } from 'axios'

import { Request } from './request'
import { tokenInterceptor } from '../interceptors/token.interceptor'
import {
  loggerRequestInterceptor,
  loggerResponseInterceptor,
} from '../interceptors/logger.interceptor'

class AuthRequest extends Request {
  constructor(config?: CreateAxiosDefaults) {
    super(config)
  }

  setToken(token: string | undefined) {
    this.request.defaults.headers.common = {
      ...this.request.defaults.headers.common,
      Authorization: token ? `Bearer ${token}` : undefined,
    }
  }
}

export const authRequest = new AuthRequest()
if (localStorage.getItem('accessToken')) {
  authRequest.setToken(localStorage.getItem('accessToken') as string)
}

authRequest.interceptors.request.use(...loggerRequestInterceptor())

authRequest.interceptors.response.use(...loggerResponseInterceptor())
authRequest.interceptors.response.use(...tokenInterceptor())
