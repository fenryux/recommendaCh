import { createApp } from 'vue'
import  axios  from 'axios'
import  VueAxios  from 'vue-axios'
import App from './App.vue'
import router from './router'

import VueCookies from 'vue-cookies'



import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

axios.defaults.baseURL = "http://localhost:3001/api"
axios.defaults.withCredentials =true;
const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
})
app.use(vuetify,axios, VueAxios)

app.use(router)
app.use(VueCookies, { expires: '1d'})
app.mount('#app')
