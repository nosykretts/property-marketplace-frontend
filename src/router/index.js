import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SigninPage from '@/components/SigninPage'
import SignupPage from '@/components/SignupPage'
Vue.use(Router)

let commonRoute = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta : {}
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninPage,
    meta : {}
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage,
    meta : {}
  },
]

let authRoute = [
]

authRoute = authRoute.map(route => {
  route.meta.requireAuth = true
  return route
})

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },  
  routes: [
    ...authRoute,
    ...commonRoute
  ],
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(route => route.meta.requireAuth)){
    if(localStorage.getItem('token')){
      next()
    }else{
      next({name:'loginPage'})
    }
  }else{
    if(to.name == 'loginPage'){
      if(localStorage.getItem('token')){
        next({name: 'todoPage'})
      }else{
        next()
      }
      
    }else{
      next()
    }
  }
})

export default router