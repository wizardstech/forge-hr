import authApi from '@/api/auth';

const state = {
  userInfos: {}
};

const getters = {
  getUserInfos: state => state.userInfos
};

const mutations = {
  setInfos (state, res) {
    state.userInfos = res;
  }
};

const actions = {
  async fetchUserInfos ({ commit }) {
    const res = await authApi.getUserInfos();
    commit('setInfos', await res.data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
