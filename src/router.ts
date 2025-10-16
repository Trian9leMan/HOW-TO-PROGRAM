import { createMemoryHistory, createRouter } from 'vue-router';

import Home from './Home.vue';
import Python from './Python.vue';
import CPP from './CPP.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/python', component: Python },
    { path: '/cpp', component: CPP },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
