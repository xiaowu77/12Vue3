import Vue from 'vue'
import VueRouter from 'vue-router'
import page1 from '../views/Page1.vue'
import page2 from '../views/Page2.vue'
import page3 from '../views/Page3.vue'
import page4 from '../views/Page4.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: page1
  },
  {
    path: '/page2',
    name: 'page2',
    component: page2
  },
    {
        path: '/page3',
        name: 'page3',
        component: page3
    },
    {
        path: '/page4',
        name: 'page4',
        component: page4
    }
]

const router = new VueRouter({
  routes
})

export default router
