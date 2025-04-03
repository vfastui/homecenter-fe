import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: { path: '/main' },
    },
    {
        path: '/404',
        component: () => import('_pages/not-found.vue'),
    },
    {
        path: '/faker',
        component: () => import('_pages/frame-main.vue'),
        children: [
            {
                path: '/main',
                name: 'main',
                component: () => import('_pages/main.vue'),
            },
        ],
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
