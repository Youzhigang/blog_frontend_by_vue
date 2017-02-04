// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// import App from './AppTest.vue';

import Router from 'vue-router';
import vuex from 'vuex';
import routes from './routes/route.js';
import Sortable from 'sortablejs'
import store from './vuex/stores.js';





Vue.directive('sortable', {
  inserted: function (el, binding) {
    new Sortable(el, binding.value || {})
  }
})

Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})


Vue.use(vuex);
Vue.use(Router);
const router = new Router({
  
  routes:routes});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router:router,
  store:store,
  components: { App }
})
