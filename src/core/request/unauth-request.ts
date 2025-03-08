import {
  loggerRequestInterceptor,
  loggerResponseInterceptor,
} from '../interceptors/logger.interceptor'
import { Request } from './request'

export const unauthRequest = new Request()

unauthRequest.interceptors.request.use(...loggerRequestInterceptor())
unauthRequest.interceptors.response.use(...loggerResponseInterceptor())
