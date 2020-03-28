import axios from './config';

export default {
  getAbsences () {
    return axios.get('/absences');
  },
  getAbsence (id) {
    return axios.get(`/absences/${id}`);
  },
  putAbsence (id, resource) {
    return axios.put(`/absences/${id}`, { resource });
  },
  postAbsence (resource) {
    return axios.put(`/absences`, { resource });
  },
};
