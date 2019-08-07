import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home.vue'
import date from '@/page/date/date.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component: Home
    },
    {
      path:'/date',
      name:'date',
      component: date
    }
  ]
})
