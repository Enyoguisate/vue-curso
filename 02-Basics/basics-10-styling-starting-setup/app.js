const app = Vue.createApp({
    data() {
        return {
            boxSelected: {
                boxA: false,
                boxB: false,
                boxC: false
            }
        }
    },
    computed: {
        boxAClasses() {
            return { active: this.boxSelected.boxA}
        },
        boxBClasses() {
            return { active: this.boxSelected.boxB}
        },
        boxCClasses() {
            return { active: this.boxSelected.boxC}
        }

    },
    methods: {
        selectBox(box) {
            if(box === 'A') {
                this.boxSelected.boxA = !this.boxSelected.boxA;
            } else if(box === 'B') {
                this.boxSelected.boxB = !this.boxSelected.boxB;
            } else {
                this.boxSelected.boxC = !this.boxSelected.boxC;
            }
        }
    }
});

app.mount('#styling');