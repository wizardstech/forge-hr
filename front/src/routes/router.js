import Vue from 'vue';
import Router from 'vue-router';
import authApi from '@/api/auth';

import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';

import usersRoutes from '@/routes/users';
import invoicesRoutes from '@/routes/invoices';
import filesRoutes from '@/routes/files';
import absencesRoutes from '@/routes/absences';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...usersRoutes,
    ...invoicesRoutes,
    ...filesRoutes,
    ...absencesRoutes,
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        auth: false
      }
    },
    {
      path: '/logout',
      name: 'logout',
      meta: {
        auth: false
      },
      beforeEnter: (to, from, next) => {
        window.localStorage.clear();
        next('/login');
      }
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    try {
      const response = await authApi.checkToken();
      const { auth } = response.data;
      if (!auth) {
        return next('/login');
      }
      return next();
    } catch (error) {
      if (error.response.data.code === 401) {
        return next('/login');
      }
    }
  } else {
    return next();
  }
});

export default router;
