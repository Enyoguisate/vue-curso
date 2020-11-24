<template>
<header>
    <nav>
        <h1>
            <router-link to="/"><span class="header-span">Find a Coach</span></router-link>
        </h1>
        <ul>
            <li>
                <router-link to="/coaches"><span class="header-span">All Coaches</span></router-link>
            </li>
            <li v-if="isLoggedIn">
                <router-link to="/requests"><span class="header-span">Requests</span></router-link>
            </li>
            <li v-else>
                <router-link to="/auth"><span class="header-span">Login</span></router-link>
            </li>
            <li v-if="isLoggedIn">
                <base-button @click="logout()"><span class="header-span">Logout</span></base-button>
            </li>
        </ul>
    </nav>
</header>
</template>

<script>
export default {
    computed: {
        isLoggedIn() {
            return this.$store.getters.isAuthenticated;
        },
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$router.replace('/');
        },
    },
};
</script>

<style scoped>
@import '../../styles/header.css';
</style>
