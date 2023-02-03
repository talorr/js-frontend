import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/sign_in',
    name: 'name',
    component: function () {
      return import( '../views/SignInView')
    }
  },
  {
    path: '/sign_up',
    name: 'name',
    component: function () {
      return import( '../views/SignUpView')
    }
  },
  {
    path: '/news_page/:id',
    name: 'news_page',
    component: function () {
      return import( '../views/NewsPage')
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: function () {
      return import( '../views/EditPost')
    }
  },
  {
    path: '/create_post',
    name: 'create_post',
    component: function () {
      return import( '../views/CreatePost')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
