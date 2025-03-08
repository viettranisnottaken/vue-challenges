export const loggerRequestInterceptor = () => [
  (request) => {
    console.log('request in logger', request)
    return request
  },
  (error) => {
    console.error('error in request logger', error)
    return error
  },
]

export const loggerResponseInterceptor = () => [
  (response) => {
    console.log('response in logger', response)
    return response
  },
  // (error) => {
  //   console.error('error in response logger', error)
  //   return error
  // },
]
