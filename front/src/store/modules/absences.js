import resourceApi from '@/api/absences';

const state = {
  absences: null,
  absence: null
};

const getters = {
  getAbsence: state => state.absence,
  getAbsences: state => state.absences
};

const mutations = {
  setAbsences (state, absences) {
    state.absences = absences;
  },
  setAbsence (state, absence) {
    state.absence = absence;
  }
};

const actions = {
  async fetchAbsences ({ commit }) {
    const { data: absences } = await resourceApi.getAbsences();
    commit('setAbsences', absences);
  },
  async fetchAbsence ({ commit }, id) {
    const { data: absence } = await resourceApi.getAbsence(id);
    commit('setAbsence', absence);
  },
  async putAbsence ({ commit }, id, resource) {
    const { data: res } = await resourceApi.putAbsence(id, resource);
    commit('setAbsence', res);
  },
  async postAbsence ({ commit }, resource) {
    const { data: res } = await resourceApi.putAbsence(id, resource);
    commit('setAbsence', res);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
