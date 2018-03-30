import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'

Vue.use(Router)

export default () => {
  const router = new Router({
    routes: [
      {
        path: '*',
        component: Main
      },
      {
        path: '/',
        component: Main
      },
    ]
  })
  return router
}
