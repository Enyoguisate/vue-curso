<template>
<div>
    <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
        <p>Do you want to continue with adding a user?</p>
    </user-alert>
    <section>
        <h2>Add a User</h2>
        <button @click="showAlert">Add User</button>
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
};
</script>
