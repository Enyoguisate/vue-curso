var app = Vue.createApp({
    data() {
        return {
            myName: 'Victor Martin',
            myAge: '34',
            myAgePlusFive: this.myAge + 5,
            favouriteNumber: Math.random(),
            urlImage: 'https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg'
        }
    },
    methods: {
        getImage() {
            return this.urlImage
        }
    }
});

app.mount('#assignment')