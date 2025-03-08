/* eslint-disable  @typescript-eslint/no-explicit-any */

import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type CreateAxiosDefaults,
} from 'axios'

export class Request {
  request!: AxiosInstance

  constructor(private config?: CreateAxiosDefaults) {
    this.request = axios.create(
      this.config ?? {
        withCredentials: false,
        timeout: 30000,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }

  get interceptors() {
    return this.request.interceptors
  }

  get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.request.get(url, config)
  }

  post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.request.post(url, data, config)
  }

  put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.request.put(url, data, config)
  }

  patch<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.request.patch(url, data, config)
  }

  delete<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.request.delete(url, config)
  }
}

const r = new Request()
r.interceptors.request.use()
