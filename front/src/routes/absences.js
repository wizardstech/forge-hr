import Absences from '@/views/absences/Absences.vue';
const routes = [
  {
    path: '/absences',
    name: 'absences',
    component: Absences,
    meta: {
      auth: true
    }
  }
];

export default routes;
