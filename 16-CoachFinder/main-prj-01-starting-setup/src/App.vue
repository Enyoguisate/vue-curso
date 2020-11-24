<template>
<div>
    <the-header></the-header>
    <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
</div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
    components: {
        TheHeader: TheHeader,
    },
    created() {
        this.$store.dispatch('tryLogin');
    },
    computed: {
        didAutoLogOut() {
            return this.$store.getters.didAutoLogout;
        },
    },
    watch: {
        didAutoLogOut(currentValue, oldValue) {
            if (currentValue && currentValue !== oldValue) {
                this.$router.replace('/coaches');
            }
        },
    },
};
</script>

<style>
@import './styles/app.css';
</style>
