import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Admissions from '../views/Admissions'
import Students from '../views/Students'
import Programmes from '../views/Programmes'
import Research from '../views/Research'
import Scholarship from '../views/Scholarship'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/about-us',
    name: 'about',
    component: About,
    props: true
  },

  {
    path: '/admissions',
    name: 'admissions',
    component: Admissions
  },

  {
    path: '/students',
    name: 'students',
    component: Students
  },

  {
    path: '/programmes',
    name: 'programmes',
    component: Programmes
  },

  {
    path: '/research',
    name: 'research',
    component: Research
  },

  {
    path: '/scholarship',
    name: 'scholarship',
    component: Scholarship
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
