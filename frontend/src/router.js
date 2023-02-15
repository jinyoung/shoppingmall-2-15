
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import OrderManager from "./components/listers/OrderCards"
import OrderDetail from "./components/listers/OrderDetail"

import ShippingManager from "./components/listers/ShippingCards"
import ShippingDetail from "./components/listers/ShippingDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/orders',
                name: 'OrderManager',
                component: OrderManager
            },
            {
                path: '/orders/:id',
                name: 'OrderDetail',
                component: OrderDetail
            },

            {
                path: '/shippings',
                name: 'ShippingManager',
                component: ShippingManager
            },
            {
                path: '/shippings/:id',
                name: 'ShippingDetail',
                component: ShippingDetail
            },



    ]
})
