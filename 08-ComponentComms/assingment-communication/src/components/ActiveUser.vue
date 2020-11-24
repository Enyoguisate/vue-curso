<template>
<section>
    <h2>Username: {{username}}</h2>
    <h3>Age: {{age}} years</h3>
</section>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {};
    },
};
</script>

<style >

</style>
