import Users from '@/views/users/Users.vue';
import Profile from '@/views/users/Profile.vue';
import UserShow from '@/views/users/UserShow.vue';

const routes = [
  {
    path: '/profile',
    name: 'users.profile',
    component: Profile,
    meta: {
      auth: true
    }
  },
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
