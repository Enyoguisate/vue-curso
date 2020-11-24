<template>
<div>
    <h2>{{ completeName }}</h2>
    <p></p>
</div>
</template>

<script>
import {
    computed,
    inject,
    onBeforeMount,
    onBeforeUpdate,
    onUnmounted,
    onMounted,
    onBeforeUnmount,
} from 'vue';

export default {
    props: ['userName'],
    setup(props, context) {
        const age = inject('age');
        console.log('context', context);
        // context.emit('save-data', 1);
        const completeName = computed(() => {
            return `Nombre: ${props.userName}, age: ${age.value}`;
        });

        onBeforeMount(function () {
            console.log('onBeforeMount');
        });

        onMounted(function () {
            console.log('onMounted');
        });

        onBeforeUpdate(function () {
            console.log('onBeforeUpdate');
        });

        onUnmounted(function () {
            console.log('onUnmounted');
        });

        onBeforeUnmount(function () {
            console.log('onBeforeUnmount');
        });
        return {
            completeName,
        };
    },
};
</script>

<style scoped>
</style>
