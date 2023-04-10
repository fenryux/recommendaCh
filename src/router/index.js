import {createRouter, createWebHistory} from 'vue-router'

import SignInView from '../views/SignInView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Landing',
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
            path: '/register',
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
        router.push("login");
    }
    else {
        next()
    }
})
export default router