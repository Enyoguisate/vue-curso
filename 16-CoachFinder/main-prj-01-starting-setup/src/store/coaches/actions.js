export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: payload.coachData.firstName,
      lastName: payload.coachData.lastName,
      description: payload.coachData.description,
      hourlyRate: payload.coachData.rate,
      areas: payload.coachData.areas
    };
    const token = context.rootGetters.token;
    const url = `https://vue-coaches-271ed.firebaseio.com/coaches/${userId}.json?auth=${token}`;
    const options = {
      method: 'PUT',
      body: JSON.stringify(coachData)
    };

    const response = await fetch(url, options);

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch coaches'
      );
      throw error;
    } 
    context.commit('registerCoach', {
      id: userId,
      ...coachData
    });
  },
  async loadCoaches(context, payload) {
    if(!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const url = `https://vue-coaches-271ed.firebaseio.com/coaches.json`;

    const response = await fetch(url);
    const responseData = await response.json();
    if(!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }
    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
    }
    context.commit('setFetchTimeStamp');
    context.commit('setCoaches', coaches);
  }
};
