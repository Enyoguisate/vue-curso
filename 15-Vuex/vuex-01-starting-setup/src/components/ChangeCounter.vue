<template>
<div>
    <button @click="increase({ value: 2 })">increase 2</button>
    <button @click="inc">increment 2</button>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex';

export default {
    data() {
        return {};
    },
    methods: {
        // add() {
        // this.$store.commit('increase', { value: 2 });
        // },
        ...mapActions('numbers', {
            inc: 'increment',
            increase: 'increase',
        }),
    },
};
</script>

<style scoped>
</style>
