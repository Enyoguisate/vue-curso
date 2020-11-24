const app = Vue.createApp({
    data() {
        return {
            userClass: '',
            paragraphColor: '',
            showParagraph: true
        }
    },
    computed: {
        getUserClass() {
            if(this.userClass.toUpperCase() === 'USER1') {
                return 'user1';
            } else if(this.userClass.toUpperCase() === 'USER2') {
                return 'user2';
            }
        },
        getParagraphColor() {
            return { backgroundColor: this.paragraphColor }
        }
    },
    methods: {
        toggleParagraph() {
            this.showParagraph = !this.showParagraph;
            console.log('toggleParagraph this.showParagraph', this.showParagraph);
        }
    }
});

app.mount('#assignment');
