import { createRouter, createWebHistory } from 'vue-router'
import BasicView from '@/views/BasicView.vue'
import TemplateRefView from '@/views/TemplateRefView.vue'
import RefView from '@/views/RefView.vue'
import ReactiveView from '@/views/ReactiveView.vue'
import ComputedView from '@/views/ComputedView.vue'
import WatchView from '@/views/WatchView.vue'
import PropsView from '@/views/PropsView.vue'

const routes = [
  {
    path: '/',
    name: 'BasicView',
    component: BasicView,
    meta: {
      title: 'Composition API basics'
    }
  },
  {
    path: '/template-ref',
    name: 'TemplateRefView',
    component: TemplateRefView,
    meta: {
      title: 'Template Refs'
    }
  },
  {
    path: '/ref-basics',
    name: 'RefView',
    component: RefView,
    meta: {
      title: 'Reactivity using <code>refs()</code>'
    }
  },
  {
    path: '/ref-vs-reactive',
    name: 'ReactiveView',
    component: ReactiveView,
    meta: {
      title: '<code>ref()</code> vs <code>reactive()</code>'
    }
  },
  {
    path: '/computed',
    name: 'ComputedView',
    component: ComputedView,
    meta: {
      title: 'Using <code>computed()</code>'
    }
  },
  {
    path: '/watch-vs-watcheffect',
    name: 'WatchView',
    component: WatchView,
    meta: {
      title: '<code>watch()</code> vs <code>watchEffect()</code>'
    }
  },
  {
    path: '/props',
    name: 'PropsView',
    component: PropsView,
    meta: {
      title: 'Passing props'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
