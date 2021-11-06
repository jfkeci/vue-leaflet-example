import Vue from 'vue'
import VueRouter from 'vue-router'
import Example1 from '../components/Example1.vue'
import Example2 from '../components/Example2.vue'
import Example3 from '../components/Example3.vue'
import Example4 from '../components/Example4.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Example1',
    component: Example1
  },
  {
    path: '/example2',
    name: 'Example2',
    component: Example2
  },
  {
    path: '/example3',
    name: 'Example3',
    component: Example3
  },
  {
    path: '/example4',
    name: 'Example4',
    component: Example4
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
