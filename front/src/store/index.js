import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/modules/auth';
import user from '@/store/modules/user';

import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    user
  },
  plugins: [new VuexPersistence().plugin]
});
