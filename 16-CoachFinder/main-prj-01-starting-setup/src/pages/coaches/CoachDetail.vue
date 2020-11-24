<template>
<div v-if="selectedCoach">
    <section>
        <base-card>
            <h2 class="fn-h2">{{ fullName }}</h2>
            <h3 class="r-h3">${{ rate }}/hour</h3>
        </base-card>
    </section>
    <section>
        <base-card>
            <header>
                <h2 style="margin-right: 20px; color: black !important">
                    Interested? Reach out now!
                </h2>
                <base-button :mode="'flat'" :to="contactLink" :link="true">Contact</base-button>
            </header>
            <router-view></router-view>
        </base-card>
    </section>
    <section>
        <base-card>
            <base-badge v-for="area in selectedCoach.areas" :key="area" :type="area" :title="area"></base-badge>
            <p style="color: black !important; padding-left: 1rem !important">
                {{ description }}
            </p>
        </base-card>
    </section>
</div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            selectedCoach: null,
        };
    },
    created() {
        this.loadCoaches();
    },
    methods: {
        async loadCoaches() {
            let coaches = this.$store.getters['coaches/getCoaches'];
            if (coaches && coaches.length === 0) {
                await this.$store.dispatch('coaches/loadCoaches', {
                    forceRefresh: true,
                });
                coaches = this.$store.getters['coaches/getCoaches'];
            }
            this.selectedCoach = coaches.find((coach) => coach.id === this.id);
        },
    },
    computed: {
        fullName() {
            return `${this.selectedCoach.firstName}, ${this.selectedCoach.lastName}`;
        },
        rate() {
            return this.selectedCoach.hourlyRate;
        },
        areas() {
            return this.selectedCoach.areas;
        },
        description() {
            return this.selectedCoach.description;
        },
        contactLink() {
            return `/coaches/${this.id}/contact`;
        },
    },
};
</script>

<style scoped>
header {
    background-color: white;
    justify-content: left;
    align-items: left;
    display: inline-flex;
}

.fn-h2 {
    margin-left: 0px;
    padding-left: 0px;
}

.r-h3 {
    text-align: left;
    margin-left: 0px;
    padding-left: 0px;
}
</style>
