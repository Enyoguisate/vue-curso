export default {
    getCoaches(state){
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(_state, getters, rootGetters) {
        const coaches = getters.getCoaches;
        const userId = rootGetters.userId;
        const isCoach = coaches.some(coach => coach.id === userId);
        return isCoach;
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if(!lastFetch) return true;
        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
};
