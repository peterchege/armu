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
            import ('../views/Register.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router