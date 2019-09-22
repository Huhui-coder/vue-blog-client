import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'baselayout',
            meta: {
                title: 'Hit'
            },
            component: () =>
                        import ( /* webpackChunkName: "about" */ './views/baseLayout.vue'),
            children: [{
                    path: '/about',
                    name: 'about',
                    meta: {
                        title: 'About'
                    },
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/About.vue')
                },{
                    path: '/home',
                    name: 'home',
                    meta: {
                        title: 'Home'
                    },
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/Home.vue')
                },
                {
                    path: '/login',
                    name: 'Login',
                    meta: {
                        title: 'Login'
                    },
                    component: () =>
                        import ( /* webpackChunkName: "Login" */ './views/Login.vue')
                },
                {
                    path: '/register',
                    name: 'register',
                    meta: {
                        title: 'Register'
                    },
                    component: () =>
                        import ( /* webpackChunkName: "Login" */ './views/Register.vue')
                },
                {
                    path: '/article',
                    name: 'article',
                    meta: {
                        title: 'article'
                    },
                    component: () =>
                        import ( /* webpackChunkName: "Login" */ './views/article.vue')
                },
                {
                    path: '/article-detail/:id',
                    name: 'articleDetail',
                    meta: {
                        title: 'articleDetail'
                    },
                    component: () =>
                        import ( /* webpackChunkName: "Login" */ './views/articleDetail.vue')
                },
                {
                    path: '/edit',
                    name: 'edit',
                    meta: {
                        title: 'edit'
                    },
                    component: () =>
                        import ( /* webpackChunkName: "Login" */ './views/edit.vue')
                }
            ]
        },
        {
            path: '/401',
            name: '401',
            meta: {
                title: '401'
            },
            component: () =>
                import ( /* webpackChunkName: "Login" */ './views/401.vue')
        },
        {
            path: '*',
            name: 'home',
            meta: {
                title: 'Home'
            },
            component: () =>
                import ( /* webpackChunkName: "Login" */ './views/Home.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})
router.beforeEach((to,from,next)=>{
    window.document.title = to.meta.title;
    next();
  })
  router.afterEach((to,form,next)=>{
    window.scrollTo(0,0)
  })

export default router