import axios from 'axios'

const http = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

http.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  install (Vue) {
    Vue.prototype.$http = http
  },
}
