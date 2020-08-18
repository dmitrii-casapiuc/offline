import axios from 'axios'

export default {
  setupInterceptors: store => {
    axios.defaults.baseURL = process.env.BASE_URL || process.env.VUE_APP_BASE_API
  }
}
