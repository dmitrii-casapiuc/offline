import Vue from 'vue'
import VueMeta from 'vue-meta'
import VueMoment from 'vue-moment'
import ElementUI from 'element-ui'

import './registerServiceWorker'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(VueMeta)
Vue.use(VueMoment)

import './styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
