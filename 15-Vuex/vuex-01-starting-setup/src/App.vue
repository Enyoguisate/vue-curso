<template>
<div>
    <base-container title="Auth">
        <user-auth></user-auth>
    </base-container>
    <base-container title="Vuex" v-if="isAuth">
        <the-counter></the-counter>
        <favorite-value></favorite-value>
        <button @click="add">Add 10</button>
        <change-counter></change-counter>
    </base-container>
</div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import {
    mapGetters
} from 'vuex';
export default {
    components: {
        BaseContainer,
        TheCounter,
        ChangeCounter,
        FavoriteValue,
        UserAuth,
    },
    methods: {
        add() {
            // this.$store.commit('increase', {
            //     value: 10
            // });
            // this.$store.commit({
            //     type: 'increase',
            //     value: 10,
            // });
            this.$store.dispatch({
                type: 'numbers/increase',
                value: 10,
            });
        },
    },
    computed: {
        ...mapGetters({
            isAuth: 'userIsAuthenticated',
        }),
    },
};
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

body {
    margin: 0;
}

.container {
    max-width: 30rem;
    margin: 2rem auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}
</style>
