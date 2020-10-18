import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import { firebase } from '../firebase/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
})

router.beforeEach((to, from , next) => {
  if ( to.matched.some(record => record.meta.requiresAuth )) {
    if ( !firebase.auth().currentUser )
    next('/login'); 
    else {
      next();
    }
  } else if ( to.matched.some(record => record.meta.requiresGuest )) {
    if ( firebase.auth().currentUser )
    next('/'); 
    else {
      next();
    }
  } else {
    next();
  }
})


export default router
