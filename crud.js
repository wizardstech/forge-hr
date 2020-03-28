export default class {
    constructor ( endpoint ) {
       this.state = {
          url: endpoint,
          status: {
            loading: false,
            success: false,
            error  : false
          }
       };

        this.getters = getters;
        this.mutations = mutations;
        this.actions = actions;
    }
}

const getters = {
  //...
};
const actions = {
  //...
};
const mutations = {
  //...
};


import Crud from './api/crud';
let endpoint = "/api/companies";

var crud = new Crud( endpoint );

const state = {
    ...crud.state
};

const getters = {
    ...crud.getters
};

const actions = {
    ...crud.actions
};

const mutations = {
    ...crud.mutations
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
