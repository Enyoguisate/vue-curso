<template>
<li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite()">Toggle Favorite</button>
    <button @click="toggleDetails()">
        {{ detailsAreVisible ? "Hide" : "Show" }}
        Details
    </button>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ phoneNumber }}</li>
        <li><strong>Email:</strong> {{ email }}</li>
    </ul>
    <button @click="deleteContact">Delete Contact</button>
</li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: {
        "toggle-favorite": function (id) {
            if (id) {
                return true;
            } else {
                console.log('id missing');
                return false;
            }
        },
        "delete-contact": function (id) {
            if (id) {
                return true;
            } else {
                console.log('id missing');
                return false;
            }
        }
    },
    data() {
        return {
            detailsAreVisible: false,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id);
        },
        deleteContact() {
            console.log('delteContact from firendContact', );
            this.$emit('delete-contact', this.id);
        },
    },
};
</script>

<style scoped>
</style>
