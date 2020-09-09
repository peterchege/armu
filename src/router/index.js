import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Landingpage',
        component: () =>
            import ('@/views/Landingpage')
    },
    {
        path: '/register/farmer',
        name: 'Register',
        component: () =>
            import ('@/Auth/FarmerRegistration.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('@/Auth/Login.vue')
    },
    {
        path: '/user',
        name: 'User',
        component: () =>
            import ('@/Auth/user.vue')
    },
    {
        path: '/farmer-details',
        name: 'Farmer Details',
        component: () =>
            import ('@/views/FarmerAdditionalDetails')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('@/views/Dashboard')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router