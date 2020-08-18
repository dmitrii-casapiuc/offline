import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_URL || process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 10000
})

export default service
