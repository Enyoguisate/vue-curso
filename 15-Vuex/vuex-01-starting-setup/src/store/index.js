import { createStore } from 'vuex';

import rootIndex from './auth/index.js';
import counterModule from './counter/index.js';

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: rootIndex.rootMutations,
  getters: rootIndex.rootGetters,
  actions: rootIndex.rootActions
});

export default store;
