import Users from '@/views/users/Users.vue';
import UserShow from '@/views/users/UserShow.vue';

const routes = [
  {
    path: '/users',
    name: 'users',
    component: Users,
    meta: {
      auth: true
    }
  },
  {
    path: '/user/:id',
    name: 'user.show',
    component: UserShow,
    meta: {
      auth: true
    }
  }
];

export default routes;
