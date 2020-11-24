<template>
<div>
    <button @click="login" v-if="!isAuth">Login</button>
    <button @click="logout" v-else>Logout</button>
    <p>UserState: {{ testAuth }}</p>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex';
export default {
    data() {
        return {};
    },
    methods: {
        ...mapActions({
            login: 'login',
            logout: 'logout',
        }),
    },
    computed: {
        ...mapGetters('numbers', {
            testAuth: 'testAuth',
        }),
        ...mapGetters({
            isAuth: 'userIsAuthenticated',
        }),
    },
};
</script>

<style scoped>
</style>
