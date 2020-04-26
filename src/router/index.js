import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import MyHome from '../views/MyHome/MyHome'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'MyHome',
    redirect: '/MyHome',
    meta: {
      title: "MyHome"
    }
  },
  {
    path: '/MyHome',
    name: 'MyHome',
    meta: {
      title: "MyHome"
    },
    component: () => import('../views/MyHome/MyHome.vue')
  },
  {
    path: '/detail/:iid',
    name: 'detail',
    meta: {
      title: "detail"
    },
    component: () => import('../views/MyHome/detailGoods/DetailGoods.vue')
  },
  {
    path: '/Class',
    name: 'Class',
    meta: {
      title: "Class"
    },
    component: () => import('../views/Class/Class.vue')
  },
  {
    path: '/Shop',
    name: 'Shop',
    meta: {
      title: "Shop"
    },
    component: () => import('../views/Shop/Shop.vue')
  },
  {
    path: '/Person',
    name: 'Person',
    meta: {
      title: "Person"
    },
    component: () => import('../views/Person/Person.vue')
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home,
  //   meta: {
  //     title: "home"
  //   }
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   meta: {
  //     title: "about"
  //   },
  //   component: () => import( '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
})
export default router
