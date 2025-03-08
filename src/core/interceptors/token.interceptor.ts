import { authRequest } from '../request/auth-request'
import { refresh } from '../services/auth.service'

// if 401, call refresh, update localStorage, then retry with new token
export const tokenInterceptor = () => {
  let isRefreshing = false
  let failureQueue: Array<{
    resolve: (value: unknown) => void
    reject: (reason: unknown) => void
  }> = []

  const processQueue = (error: unknown, token: string | undefined) => {
    failureQueue.forEach((el) => {
      if (error) {
        el.reject(error)
      } else {
        el.resolve(token)
      }
    })

    failureQueue = []
  }

  return [
    (response) => {
      return response
    },
    async (error) => {
      if (error.status === 401) {
        // 401: Unauthorized or token expired
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failureQueue.push({
              resolve,
              reject,
            })
          }).then((token) => {
            return authRequest.request({
              ...error.config,
              headers: {
                ...error.config.headers,
                Authorization: token ? `Bearer ${token}` : undefined,
              },
            })
          })
        }

        return new Promise((resolve, reject) => {
          // call refresh api
          refresh()
            .then((response) => {
              // set token for auth request
              authRequest.setToken(response.accessToken)
              // process queued requests while waiting for refresh
              processQueue(null, response.accessToken)
              resolve(
                // resume failed request
                authRequest.request({
                  ...error.config,
                  headers: {
                    ...error.config.headers,
                    // re-adding header because if not, error.config would override Authorization
                    Authorization: response.accessToken
                      ? `Bearer ${response.accessToken}`
                      : undefined,
                  },
                }),
              )
            })
            .catch((error) => {
              processQueue(error, undefined)
              reject(error)
            })
            .finally(() => {
              isRefreshing = false
            })
        })
      }

      console.log('access token response interceptor', error)
    },
  ]
}
