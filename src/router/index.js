import {createRouter, createWebHistory} from 'vue-router'

import SignInView from '../views/SignInView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'defaultpage',
            component: () => import('../views/HomeView.vue'),
            meta:{
                auth:false
            }
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
            meta:{
                auth:false
            }
        },
        {
            path: '/login',
            name: 'login',
            component: SignInView,
            meta:{
                auth: false
            }
        },
        {
            path: '/universities',
            name: 'universities',
            component: () => import('../views/UniversitiesView.vue')
        },
        {
            path: '/specializations',
            name: 'specializations',
            component: () => import('../views/SpecializationsView.vue')
        },
        {
            path: '/proforientation',
            name: 'proforientation',
            component: () => import('../views/ProforientationView.vue'),
            meta:{
                auth:true
            }
        },
        {
            path: '/top30',
            name: 'top30',
            component: () => import('../views/Top30UniversitiesView.vue'),
            meta:{
                auth:true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
            meta:{
                auth:true
            }

        },
        {
            path: '/register',
            name: 'sign-up',
            component: () => import('../views/SignUpView.vue')
        },

    ]
})
export default router;