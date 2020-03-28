import Absences from '@/views/absences/Absences.vue';
import AbsenceShow from '@/views/absences/AbsenceShow.vue';
const routes = [
  {
    path: '/absences/:id',
    name: 'absences.show',
    component: AbsenceShow,
    meta: {
      auth: true
    }
  },
  {
    path: '/absences',
    name: 'absences',
    component: Absences,
    meta: {
      auth: true
    }
  },
];

export default routes;
