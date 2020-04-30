import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'
import Article from '@/pages/Article.vue'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home},
    { path: '/article/:id', component: Article, props:true }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')