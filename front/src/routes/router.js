import Vue from 'vue';
import Router from 'vue-router';
import authApi from '@/api/auth';

import Home from '@/views/Home.vue';

import LayoutDefault from '@/layouts/LayoutDefault.vue';
import LayoutModal from '@/layouts/LayoutModal.vue';

import usersRoutes from '@/routes/users';
import invoicesRoutes from '@/routes/invoices';
import filesRoutes from '@/routes/files';
import absencesRoutes from '@/routes/absences';
import authRoutes from '@/routes/auth';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      component: LayoutDefault,
      path: '',
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
          meta: {
            auth: true
          }
        },
        ...usersRoutes,
        ...invoicesRoutes,
        ...filesRoutes,
        ...absencesRoutes
      ]
    },
    {
      component: LayoutModal,
      path: '',
      children: [
        ...authRoutes
      ]
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
