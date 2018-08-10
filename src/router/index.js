import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import FF from '@/components/FF'
import LYY from '@/components/LYY'
import Ll from '@/components/Ll'
import Ymm from '@/components/Ymm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/ff',
      name: 'FF',
      component: FF
    },
    {
      path: '/lyy',
      name: 'LYY',
      component: LYY
    },
    {
      path: '/ll',
      name: 'Ll',
      component: Ll
    },
    {
      path: '/ymm',
      name: 'Ymm',
      component: Ymm
    }
  ]
})
