import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'

import 'assets/css/reset.css'
import 'assets/scss/common.scss'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    strict: false
})

new Vue({
    router
}).$mount('#app')