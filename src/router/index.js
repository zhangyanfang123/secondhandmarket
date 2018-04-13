import Vue from 'vue'
import Router from 'vue-router'
import New from '@/components/New'
import HomePage from '@/components/Homepage'
import MyCollection from '@/components/MyCollection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'HomePage',
      component:HomePage
    },
    {
      path:'/new',
      name:'New',
      component:New
    },
    {
      path:'/myCollection',
      name:'MyCollection',
      component:MyCollection
    },
    {
      path: '*',
      redirect:'/'
    }
  ]
})
