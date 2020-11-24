<template>
<div>
    <form @submit.prevent="submitForm">
        <div>
            <label for="email">Your Email</label>
            <input type="email" id="email" v-model.trim="email" />
        </div>
        <div>
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="5" v-model.trim="message"></textarea>
        </div>
        <p class="errors" v-if="!formIsValid">
            Please enter a valid email and non-empty message
        </p>
        <div class="actions" style="margin: 15px">
            <base-button type="submit">Send Message</base-button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            email: '',
            message: '',
            formIsValid: true,
        };
    },
    methods: {
        submitForm() {
            this.validateForm();
            if (this.formIsValid) {
                const message = {
                    coachId: this.$route.params.id,
                    email: this.email,
                    message: this.message,
                };
                this.$store.dispatch('requests/registerRequest', message);
                this.$router.replace('/coaches');
            }
        },
        validateForm() {
            this.formIsValid = true;
            if (
                this.email === '' ||
                !this.email.includes('@') ||
                this.message === ''
            ) {
                this.formIsValid = false;
                return;
            }
        },
    },
};
</script>

<style scoped>
@import '../../styles/contact-coach.css';
</style>
