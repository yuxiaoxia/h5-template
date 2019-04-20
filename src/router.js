import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import utils from 'utils'

Vue.use(Router);

import Home from './views/Home.vue';

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
})
router.beforeEach((to, from, next) => {
    NProgress.start();
    if(to.meta.title) utils.setTitle(to.meta.title)
    if(to.meta.permission){
            // 权限判断
    }else{
        next();
    }
})

router.afterEach(() => {
    NProgress.done();
});

export default router
