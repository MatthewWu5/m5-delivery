import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import * as cookie from 'js-cookie'

const api = axios.create({
  timeout: 10 * 1000,
})

// api.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// api.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8'

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (process.env.NODE_ENV === 'development') {
    //development env use the relative url
    // if (/^https?/.test(config.url)) {
    //   config.url = config.url.replace(/^https?:\/\/(.*?)\//g, '/')
    // }
  }
  config.headers['X-CSRF-TOKEN'] = cookie.get('XSRF-TOKEN') || ''

  return config
})

api.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError) => {
    if (error.response.status === 401) {
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export default api
