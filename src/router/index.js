import Vue from 'vue'
import Router from 'vue-router'
import Demo from 'views/demo/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/demo'
    },
    {
      path: '/demo',
      component: Demo
    }
  ]
})
