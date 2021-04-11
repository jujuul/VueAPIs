import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [{
            name: 'Extend',
            path: '/extend',
            component: () => import('@/views/Extend')
        },
        {
            name: 'Sku',
            path: '/sku',
            component: () => import('@/views/Sku')
        },
        {
            name: 'Mixin',
            path: '/mixin',
            component: () => import('@/views/Mixin')
        },
        {
            name: 'NextTick',
            path: '/nextTick',
            component: () => import('@/views/nextTick')
        },
        {
            name: 'Filter',
            path: '/filter',
            component: () => import('@/views/filter')
        },
    ]
})