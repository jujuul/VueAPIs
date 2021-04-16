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
            name: 'Sku',
            path: '/ssskkkuuu',
            component: () => import('@/views/ssskkkuuu')
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
        {
            name: 'Directive',
            path: '/directive',
            component: () => import('@/views/directive')
        },
        {
            name: 'Observable',
            path: '/observable',
            component: () => import('@/views/observable')
        },
        {
            name: 'Function',
            path: '/function',
            component: () => import('@/views/Function')
        },
        {
            name: 'Slot',
            path: '/slot',
            component: () => import('@/views/slot')
        },
    ]
})