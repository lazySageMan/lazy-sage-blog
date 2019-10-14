import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function loadView(view) { //路由懒加载
    return () => import(`@/views/${view}.vue`);
}

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: loadView('Home')
        },
        {
            path: '/content',
            name: 'content',
            component: loadView('blog-content')
        },
        {
            path: '/tags',
            name: 'tags',
            component: loadView('tag')
        },
        {
            path: '/about',
            name: 'about',
            component: loadView('about')
        }
    ]
});
