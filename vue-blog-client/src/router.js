import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            children: [{
                    path: '/about',
                    name: 'about',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/About.vue')
                },
                {
                    path: '/login',
                    name: 'Login',
                    component: () =>
                        import ( /* webpackChunkName: "Login" */ './views/Login.vue')
                },
                {
                    path: '/article',
                    name: 'article',
                    component: () =>
                        import ( /* webpackChunkName: "Login" */ './views/article.vue')
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/401',
            name: '401',
            component: () =>
                import ( /* webpackChunkName: "Login" */ './views/401.vue')
        }
    ]
})