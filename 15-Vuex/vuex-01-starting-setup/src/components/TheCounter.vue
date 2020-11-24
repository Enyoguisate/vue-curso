<template>
<div class="container">
    <h3>{{ finalCounter }}</h3>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';

export default {
    data() {
        return {};
    },
    computed: {
        // counter() {
        //     return this.$store.getters.finalCounter;
        // },
        ...mapGetters('numbers', {
            finalCounter: 'finalCounter'
        }),
    },
    methods: {},
};
</script>

<style scoped>
</style>
