<template>
<div>
    <section>
        <base-card>
            <h2>Register as a Coach</h2>
            <coach-form @submit-data="register"></coach-form>
        </base-card>
    </section>
</div>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
    components: {
        CoachForm,
    },
    data() {
        return {};
    },
    methods: {
        register(coachData) {
            this.$store.dispatch('coaches/registerCoach', {
                coachData,
            });
            this.$router.replace('/');
        },
    },
};
</script>
