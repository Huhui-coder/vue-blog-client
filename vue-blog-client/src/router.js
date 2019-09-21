import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'baselayout',
            component: () =>
                        import ( /* webpackChunkName: "about" */ './views/baseLayout.vue'),
            children: [{
                    path: '/about',
                    name: 'about',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/About.vue')
                },{
                    path: '/home',
                    name: 'home',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/Home.vue')
                },
                {
                    path: '/login',
                    name: 'Login',
                    component: () =>
                        import ( /* webpackChunkName: "Login" */ './views/Login.vue')
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () =>
                        import ( /* webpackChunkName: "Login" */ './views/Register.vue')
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