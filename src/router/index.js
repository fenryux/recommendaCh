import {createRouter, createWebHistory} from 'vue-router'

import AuthorizationForm from '../components/AuthorizationForm.vue'
import RegistrationForm from '../components/RegistrationForm.vue'
import ForgotPasswordForm from '../components/ForgotPasswordForm.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'auth',
            component: AuthorizationForm
        },
        {
            path: '/register',
            name: 'register',
            component: RegistrationForm
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: ForgotPasswordForm
        }
    ]
})

export default router