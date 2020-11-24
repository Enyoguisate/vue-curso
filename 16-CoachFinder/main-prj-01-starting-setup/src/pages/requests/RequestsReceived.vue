<template>
<div>
    <base-dialog :show="!!error" title="An error Ocurred" @close="closeErrorModal">
        <p>{{ error }}</p>
    </base-dialog>
    <section>
        <base-card>
            <header class="rr-header">
                <h2>Requests Received</h2>
            </header>
            <base-spinner v-if="isLoading"></base-spinner>
            <ul v-else-if="!isLoading && hasRequests">
                <request-item v-for="request in receivedRequests" :key="request.id" :email="request.email" :message="request.message">
                </request-item>
            </ul>
            <h3 v-else>You haven't received any requests yet</h3>
        </base-card>
    </section>
</div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
    components: {
        RequestItem,
    },
    data() {
        return {
            isLoading: false,
            error: null,
        };
    },
    computed: {
        receivedRequests() {
            return this.$store.getters['requests/requests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
        },
    },
    methods: {
        async loadRequests() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('requests/fetchRequests').then(() => {
                    this.isLoading = false;
                });
            } catch (error) {
                this.isLoading = false;
                this.error = error.message || 'Something went wrong!';
                console.log('error', this.error);
            }
        },
        handleError() {
            this.error = null;
        },
        closeErrorModal() {
            this.error = null;
        },
    },
    created() {
        this.loadRequests();
    },
};
</script>

<style scoped>
@import '../../styles/requests-received.css';
</style>
