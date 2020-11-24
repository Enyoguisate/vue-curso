<template>
<div class="container">
    <h3>{{ counter }}</h3>
    <p>Do more!</p>
</div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        counter() {
            return this.$store.getters['numbers/normalizedCounter'];
        },
    },
    methods: {},
};
</script>

<style scoped>
</style>
