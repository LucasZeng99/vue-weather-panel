// development starts on march 29th 13:15

import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'

Vue.use(VueResource)

new Vue({
  el: '#app',
  router: createRouter(),
  store: createStore({
    locations: [],
  }),
  render: h => h(App)
})
