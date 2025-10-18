import { createWebHistory, createRouter } from "vue-router"

import Home from "./views/Home.vue"
import Python from "./views/Python.vue"
import CPP from "./views/CPP.vue"
import Python2 from "./views/Python2.vue"

const routes = [
    { path: "/", component: Home },
    { path: "/python/", component: Python },
    { path: "/cpp/", component: CPP },
    { path: "/python/2", component: Python2 },
    { path: "/python/1", redirect: "/python/" },
    { path: "/cpp/1", redirect: "/cpp/" },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
