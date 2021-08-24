import Vue from 'vue'
import Router from 'vue-router'
import 'nprogress/nprogress.css'
import map from '@/components/map'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'map',
    component: map
  }]
})

