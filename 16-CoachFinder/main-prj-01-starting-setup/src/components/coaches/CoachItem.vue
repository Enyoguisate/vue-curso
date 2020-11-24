<template>
<li class="coach-item">
    <h3>{{ fullname }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div class="coach-item-div">
        <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    </div>

    <div class="actions coach-item-div">
        <base-button :link="true" :to="coachContactLink" :mode="'outline'">Contact</base-button>
        <base-button :link="true" :to="coachViewDetails" :mode="'flat'">View Details</base-button>
    </div>
</li>
</template>

<script scoped>
export default {
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed: {
        fullname() {
            return `${this.firstName}, ${this.lastName}`;
        },
        coachContactLink() {
            return `${this.$route.path}/${this.id}/contact`;
        },
        coachViewDetails() {
            return `${this.$route.path}/${this.id}`;
        },
    },
};
</script>

<style scoped>
@import '../../styles/coach-item.css';
</style>
