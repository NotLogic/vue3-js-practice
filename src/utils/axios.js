import axios from 'axios'
const baseURL = ''
const instance = axios.create({
  baseURL,
  timeout: 6 * 1000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  console.log(config)
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})
// 返回拦截器
instance.interceptors.response.use(res => {
  console.log(res)
  return res
}, error => {
  console.log(error)
  return Promise.reject(error)
})

export default instance
