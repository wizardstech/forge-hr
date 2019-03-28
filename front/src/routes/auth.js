import Login from '@/views/Login.vue';

const routes = [
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
  }];

export default routes;
