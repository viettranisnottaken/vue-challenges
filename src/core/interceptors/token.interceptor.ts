import { authRequest } from '../request/auth-request'
import { refresh } from '../services/auth.service'

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

function reAuth(config) {
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      failureQueue.push({
        resolve,
        reject,
      })
    }).then((token) => {
      return authRequest.request({
        ...config,
        headers: {
          ...config.headers,
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      })
    })
  }

  isRefreshing = true

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
            ...config,
            headers: {
              ...config.headers,
              // re-adding header because if not, error.config would override Authorization
              Authorization: response.accessToken ? `Bearer ${response.accessToken}` : undefined,
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

export const tokenRequestInterceptor = () => {
  return [
    (request) => {
      const now = Date.now()
      const accessToken = request.headers.Authorization?.replace('Bearer ', '')

      if (accessToken) {
        const ttl = Number(accessToken.split('&')[1].replace('ttl=', ''))

        if (ttl - 60000 <= now) {
          console.warn('should refresh')
          refresh().catch(console.error)
        }
      }

      return request
    },
  ]
}

export const tokenResponseInterceptor = () => {
  return [
    (response) => {
      return response
    },
    async (error) => {
      if (error.status === 401) {
        // 401: Unauthorized or token expired
        return reAuth(error.config)
      }
    },
  ]
}
