const app = Vue.createApp({
  data() {
    return { 
      newGoal: '',
      goals: [] 
    }
  },
  methods: {
    add() {
      if(this.newGoal.trim().length !== 0){
        this.goals.push(this.newGoal);
        this.newGoal = '';
      }
    },
    clear() {
      this.goals = [];
      this.newGoal = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
