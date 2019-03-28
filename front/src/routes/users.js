import Users from '@/views/users/Users.vue';
import UserShow from '@/views/users/UserShow.vue';

const routes = [
  {
    path: '/users',
    name: 'users.index',
    component: Users,
    meta: {
      auth: true
    }
  },
  {
    path: '/users/:id',
    name: 'users.show',
    component: UserShow,
    meta: {
      auth: true
    }
  }
];

export default routes;
