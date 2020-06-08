import Vue from 'vue'
import VueRouter from 'vue-router'
import Landingpage from '../views/Landingpage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Landingpage',
        component: Landingpage
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('@/views/Auth/Register.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('@/views/Auth/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router