<template>
<div class="base-button-div">
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</div>
</template>

<script>
export default {
    props: {
        link: {
            type: Boolean,
            required: false,
            default: false,
        },
        mode: {
            type: String,
            required: false,
            default: 'flat',
        },
        to: {
            type: String,
            required: false,
            default: '',
        },
    },
};
</script>

<style scoped>
@import '../../styles/base-button.css';
</style>
