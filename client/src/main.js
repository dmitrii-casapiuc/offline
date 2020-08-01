import Vue from 'vue'
import VueMeta from 'vue-meta'
import VueMoment from 'vue-moment'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

import './registerServiceWorker'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.use(ElementUI, { locale })
Vue.use(VueMeta)
Vue.use(VueMoment)

import './styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
