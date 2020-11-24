const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    email: 'mlorenz@mail.com',
                    phoneNumber: 555123333,
                    showDetails: false
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    email: 'jjones@mail.com',
                    phoneNumber: 555321222,
                    showDetails: false
                },
                {
                    id: 'elsa',
                    name: 'Elsa bor del encuentro',
                    email: 'ebdencuentro@mail.com',
                    phoneNumber: 555231333,
                    showDetails: false
                },
                {
                    id: 'carlitos',
                    name: 'Carlitos Bala',
                    email: 'cbala@mail.com',
                    phoneNumber: 555213111,
                    showDetails: false
                },
            ]
        }
    },
    methods: {

    }
});

app.component('friend-contact', {
    template: `
        <li>
            <h2> {{ friend.name }} </h2>
            <button @click="toggleDetails()">
                {{ detailsAreVisible ?  'Hide' :  'Show'}}
                Details
            </button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phoneNumber }} </li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                email: 'mlorenz@mail.com',
                phoneNumber: 555123333,
                showDetails: false
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app')