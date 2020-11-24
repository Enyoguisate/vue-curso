<template>
<div>
    <base-dialog :show="!!error" title="An error Ocurred" @close="closeErrorModal">
        <p>{{ error }}</p>
    </base-dialog>
    <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button :mode="'outline'" @click="loadCoaches(true)">Refresh</base-button>
                <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to register as a coach</base-button>
                <base-button :link="true" :to="'/register'" :mode="'flat'" v-if="showRegisterBtn">Register as Coach</base-button>
            </div>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <div>
                <ul v-if="hasCoaches">
                    <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName" :lastName="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas">
                    </coach-item>
                </ul>
                <h3 v-else>No Coaches were found</h3>
            </div>
        </base-card>
    </section>
</div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
    components: {
        CoachItem,
        CoachFilter,
    },
    data() {
        return {
            isLoading: false,
            error: '',
            activeFilters: {
                frontend: true,
                backend: true,
                career: true,
            },
        };
    },
    computed: {
        filteredCoaches() {
            const coaches = this.$store.getters['coaches/getCoaches'];
            return coaches.filter((coach) => {
                if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                    return true;
                }
                if (this.activeFilters.backend && coach.areas.includes('backend')) {
                    return true;
                }
                if (this.activeFilters.career && coach.areas.includes('career')) {
                    return true;
                }
                return false;
            });
        },
        hasCoaches() {
            return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
        },
        isCoach() {
            return this.$store.getters['coaches/isCoach'];
        },
        isLoggedIn() {
            return this.$store.getters.isAuthenticated;
        },
        showRegisterBtn() {
            return this.isLoggedIn && !this.isLoading && !this.isCoach;
        },
    },
    methods: {
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
        },
        async loadCoaches(refresh = false) {
            this.isLoading = true;
            try {
                await this.$store
                    .dispatch('coaches/loadCoaches', {
                        forceRefresh: refresh,
                    })
                    .then(() => {
                        this.isLoading = false;
                    });
            } catch (error) {
                this.isLoading = false;
                this.error = error.message || 'Something went wrong!';
                console.log('error', this.error);
            }
        },
        closeErrorModal() {
            this.error = null;
        },
    },
    created() {
        this.loadCoaches();
    },
};
</script>

<style scoped>
@import '../../styles/coaches-list.css';
</style>
