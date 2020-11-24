<template>
<div>
    <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
        <p>Do you want to continue with deleting a user?</p>
    </user-alert>
    <section>
        <h2>Delete a User</h2>
        <button @click="showAlert">Delete User</button>
    </section>
</div>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixins from '../mixins/alert.js';
import logger from '../mixins/logger.js';

export default {
    components: {
        UserAlert,
    },
    mixins: [alertMixins, logger],
    data() {
        return {
            alertTitle: 'Delete User?',
        };
    },
};
</script>
