import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home.vue'
import date from '@/page/date/date.vue'
import Sweep from '@/page/sweep/sweep.vue'

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
      component: Home,
      meta:{
        title:"首页"
      }
    },
    {
      path:'/date',
      name:'date',
      component: date,
      meta:{
        title:"日历"
      }
    },
    {
      path:'/sweep',
      name:'sweep',
      component: Sweep,
      meta:{
        title:"扫雷"
      }
    }
  ]
})
