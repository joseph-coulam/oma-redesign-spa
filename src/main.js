import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import Home from '@/pages/Home.vue'
import Article from '@/pages/Article.vue'
// import Form from '@/pages/Form.vue'
// import Redirect from '@/components/Redirect.vue'
import AOS from 'aos'
import VueHead from 'vue-head'
import Hotjar from 'vue-hotjar'

import '@/assets/css/tailwind.css'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueHead)

Vue.use(Hotjar, {
  isProduction: true,
  id: '1839183' // Hotjar Site ID
})

const routes = [
    // { path: '/', name:'root', component: Article}, 
    // Remove beautiful routing for now, and change this when we have access to the server - when the agency gets back to me
    { path: '/', name:'article', component: Article, props:true },
    // { path: '/article/:slug', name:'article', component: Article, props:true },
    // { path: '/form/:id', name:'form', component: Form, props:true }
]

const router = new VueRouter({
  base: '/content/test/getting-self-employed-mortgages-with-1-years-accounts/',
  routes,
  // Eventually in production mode we need to configure the server 
  // mode: 'history'
  mode: 'hash'
})

new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
  router,
}).$mount('#app')