import Vue from 'vue'
import store from './store/'
import ElementUI from 'element-ui'
import './theme/index.css'
import './assets/css/font-awesome.min.css'
import './assets/css/style.css'
import router from './router/'
import Config from './config/'
import Axios from './utils/axios'
import Function from './utils/'
import vueFilter from './utils/filter';

import App from './App.vue'
Vue.prototype.$Config = Config
console.log(Config)
Vue.prototype.$Func = Function
Vue.prototype.$axios = Axios
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title?to.meta.title+'-'+Config.siteName:Config.siteName;

  if (!sessionStorage.getItem(Config.tokenKey) && to.path != '/login') {
    next({path: '/login'});

  } else {
    next();
  }
});
router.afterEach(transition => {

});

vueFilter();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
