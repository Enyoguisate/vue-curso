const app = Vue.createApp({
    data() {
        return {
            taskList: [],
            newTask: null,
            showList: true
        }
    },
    computed: {
        showCaption() {
            return !this.showList ? 'Show List' : 'Hide'
        }
    },
    methods: {
        toggleList() {
            this.showList = !this.showList;
        },
        addTask() {
            if(this.newTask.trim().length !== 0) {
                this.taskList.push({
                    id: this.taskList.length,
                    name: this.newTask
                });
                this.newTask = '';
            }
        },
        removeTask(index) {
            this.taskList.splice(index, 1);
        }
    }
});

app.mount('#assignment');



// 1) Add code to manage a list of tasks in a Vue app
// When clicking "Add Task" a new task with the entered text should be added
// 2) Output the list of tasks here
// 3) When the below button is pressed, the list should be shown or hidden
// BONUS: Also update the button caption