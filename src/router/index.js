import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SportbookView from '../views/SportbookView.vue'
import ReportView from '../views/ReportView.vue'
import ScoreView from '../views/ScoreView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  
  {
    path: '/sportbook',
    name: 'sportbook',
    component: SportbookView
  }, 
  {
    path: '/report',
    name: 'report',
    component: ReportView
  },
  {
    path: '/score',
    name: 'score',
    component: ScoreView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
