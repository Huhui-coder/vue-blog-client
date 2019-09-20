import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import md5 from 'js-md5';

import api from './http/index'
Vue.use(api)

Vue.config.productionTip = false
Vue.prototype._md5 = md5;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
