export default {
  async registerRequest(context, payload) {
    let request = {
      message: payload.message,
      email: payload.email
    };
    const response = await fetch(
      `https://vue-coaches-271ed.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(request)
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }
    request = {
      id: responseData.name,
      coachId: payload.coachId,
      ...request
    };
    context.commit('registerRequest', request);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const url = `https://vue-coaches-271ed.firebaseio.com/requests/${coachId}.json?auth=${token}`;
    const response = await fetch(url);
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch requests'
      );
      throw error;
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        message: responseData[key].message,
        email: responseData[key].email
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  }
};
