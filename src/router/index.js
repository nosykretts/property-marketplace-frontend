import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SigninPage from '@/components/SigninPage'
import SignupPage from '@/components/SignupPage'
import HouseDetailPage from '@/components/HouseDetailPage'
import Dashboard from '@/components/Dashboard'
import MyHouses from '@/components/MyHouses';
import MyHome from '@/components/MyHome';
import MyHouseList from '@/components/MyHouseList'
import HouseForm from '@/components/HouseForm';

Vue.use(Router)

const publicRoute = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {},
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninPage,
    meta: {},
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage,
    meta: {},
  },
  {
    path: '/house/:id',
    name: 'houseDetail',
    component: HouseDetailPage,
    props: true,
  },
]

const authRoute = [
  {
    path: '/my',
    component: Dashboard,
    meta: { requireAuth: true },
    children: [
      {
        path: '',
        name: 'myHome',
        component: MyHome,
      },
      {
        path: 'houses',
        component: MyHouses,
        children: [
          {
            path: '',
            name: 'myHouseList',
            component: MyHouseList,
            props: true,
          },
          {
            path: 'edit/:id',
            name: 'houseEdit',
            component: HouseForm,
            props: true,
          },
          {
            path: 'create',
            name: 'houseCreate',
            component: HouseForm,
            props: true,
          },
        ],
      },
      {
        path: 'houses/:id',
        name: 'myhouseDetail',
        component: HouseDetailPage,
        props: true,
      },
    ],
  },
]

const router = new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [...authRoute, ...publicRoute],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requireAuth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({ name: 'signin' })
    }
  } else if (to.name === 'signin' && localStorage.getItem('token')) {
    next(false)
  } else {
    next()
  }
})

router.onError((err) => {
  console.log(err.message)
})

export default router
