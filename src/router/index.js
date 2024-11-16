import { createRouter, createWebHistory } from 'vue-router'
import BasicView from '../views/BasicView.vue'
import TemplateRefView from '../views/TemplateRefView.vue'
import RefView from '../views/RefView.vue'
import ReactiveView from '../views/ReactiveView.vue'
import ComputedView from '../views/ComputedView.vue'
import WatchView from '../views/WatchView.vue'

const routes = [
  {
    path: '/',
    name: 'BasicView',
    component: BasicView
  },
  {
    path: '/template-ref',
    name: 'TemplateRefView',
    component: TemplateRefView
  },
  {
    path: '/ref-basics',
    name: 'RefView',
    component: RefView
  },
  {
    path: '/ref-vs-reactive',
    name: 'ReactiveView',
    component: ReactiveView
  },
  {
    path: '/computed',
    name: 'ComputedView',
    component: ComputedView
  },
  {
    path: '/watch-vs-watcheffect',
    name: 'WatchView',
    component: WatchView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
