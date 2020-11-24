const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add(value) {
            this.counter += +value;
        }
    },
    computed: {
        result() {
            if (this.counter < 37) {
                return 'Not there yet'
            } else if (this.counter === 37) {
                return '37!'
            } else {
                return 'TooMuch!'
            }
        }
    },
    watch: {
        result() {
            if (this.counter !== 0) {
                setTimeout(() => {
                    this.counter = 0;
                }, 5000);
            }
        }
    }
});

app.mount('#assignment')