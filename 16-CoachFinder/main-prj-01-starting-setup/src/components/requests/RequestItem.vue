<template>
<li class="ri-li">
    <div>
        <a :href="emailLink" class="ri-a">{{ email }}</a>
    </div>
    <p class="ri-p">{{ message }}</p>
</li>
</template>

<script>
export default {
    props: ['email', 'message'],
    computed: {
        emailLink() {
            return 'mailto:' + this.email;
        },
    },
};
</script>

<style scoped>
@import '../../styles/request-item.css';
</style>
