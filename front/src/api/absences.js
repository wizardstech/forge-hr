import axios from './config';

export default {
  getAbsences () {
    console.log("salut");
    return axios.get('/absences');
  },
  getAbsence (id) {
    return axios.get(`/absences/${id}`);
  }
};
