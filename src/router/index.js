import {createRouter, createWebHistory} from 'vue-router'

import SignInView from '../views/SignInView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/HomeView.vue'),
            meta:{
                auth:true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: SignInView,
            meta:{

            }
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/HSUList.vue'),
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
            path: '/sign-up',
            name: 'sign-up',
            component: () => import('../views/SignUpView.vue')
        },

    ]
})
router.beforeEach((to, from, next) => {
    console.log(window.$cookies.get("logged") === 'true');
    if(to.name === "login" && window.$cookies.get("logged")){
        next('/home')
    }
    if (to.meta.auth && !window.$cookies.get("logged")) {
        next('/login')
    }
    else {
        next()
    }
})
export default router