const app = Vue.createApp({
    data() {
        return {
            courseGoalA: '<h3>Finish this dammned course</h3>',
            courseGoalB: '<h3>Learn Data Binding</h3>',
            learnMoreUrl: 'https://es.vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < .5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
});
app.mount('#user-goal');