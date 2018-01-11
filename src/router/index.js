import Vue from 'vue'
import Router from 'vue-router'
import demo from './demo'
import meeting from './meeting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/demo'
    },
    ...demo,
    ...meeting
  ]
})
