export default {
  requests(state, _2, rootGetters) {
    const loggedUId = rootGetters.auth.userId;
    const uRequests = state.requests.filter(req => req.coachId === loggedUId);
    return uRequests;
  },
  hasRequests(_, getters) {
    const reqs = getters['requests'];
    return reqs && reqs.length > 0;
  }
};
