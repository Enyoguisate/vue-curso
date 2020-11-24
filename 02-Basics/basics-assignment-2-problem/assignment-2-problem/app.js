const app = Vue.createApp({
    data() {
        return {
            keyDownValue: '',
            enterKeyEntered: ''
        }
    },
    methods: {
        showAlert() {
            alert('Alert Button Pushed')
        },
        getKeyDownEvent(event) {
            console.log('event.target.value', event.target.value);
            this.keyDownValue = event.target.value;
        },
        getEnterKeyEvent(event) {
            this.enterKeyEntered = event.target.value;
        }
    }
});

app.mount('#assignment')