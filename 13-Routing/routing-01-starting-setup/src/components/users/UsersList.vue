<template>
<ul>
    <button @click="goToTeams">go to teams</button>
    <button @click="saveChanges">Save Changes</button>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
</ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
    components: {
        UserItem,
    },
    inject: ['users'],
    data() {
        return {
            changesSaved: false
        }
    },
    methods: {
        goToTeams() {
            this.$router.push('/teams');
        },
        saveChanges() {
            this.changesSaved = true;
        }
    },
    beforeRouteEnter(to, from, next) {
        // console.log('beforeRouteEnter component');
        // console.log('Global');
        // console.log('to', to);
        // console.log('from', from);
        next();
    },
    beforeRouteLeave(to, from, next) {
        // console.log('beforeRouteLeave', to, from);
        const uwl = prompt('Are you sure? You got unsaved changes!');
        // console.log('uwl', uwl);
        if (uwl && (uwl.toUpperCase() === 'YES' || uwl.toUpperCase() === 'Y')) {
            next();
        } else {
            next(false);
        }
    },
    unmounted() {
        console.log('unmounted');
    }
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 2rem auto;
    max-width: 20rem;
    padding: 0;
}
</style>
