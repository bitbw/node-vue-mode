import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
 const CategoryEdit = () => import(/* webpackChunkName: "CategoryEdit" */ '../views/category/edit.vue')
 const CategoryList = () => import(/* webpackChunkName: "CategoryList" */ '../views/category/list.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/category/edit/:id',
        name: 'CategoryEdit',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: CategoryEdit,
        props:true
      },
      {
        path: '/category/craete',
        name: 'CategoryCraete',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: CategoryEdit,
      },
      {
        path: '/category/list',
        name: 'CategoryList',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: CategoryList
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
