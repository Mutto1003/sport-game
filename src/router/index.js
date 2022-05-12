import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SportView from '../views/SportView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },   
  {
    path: '/sport',
    name: 'sport',
    component: SportView
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
