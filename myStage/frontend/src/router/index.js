import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../page/Home.vue'
import LoginView from '../components/Common/Login.vue'
import SearchView from '../page/SearchView.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/search', name: 'Search', component: SearchView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
