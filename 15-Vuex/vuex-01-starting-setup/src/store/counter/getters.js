export default {
  testAuth(state, getters, rootState, rootGetters) {
    return rootGetters.userIsAuthenticated;
  },
  finalCounter(state) {
    return state.counter * 1;
  },
  normalizedCounter(state, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter > 0 && finalCounter < 100) {
      return 0;
    } else if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  }
};
