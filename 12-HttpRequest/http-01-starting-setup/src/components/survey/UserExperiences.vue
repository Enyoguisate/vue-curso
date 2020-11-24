<template>
<section>
    <base-card>
        <h2>Submitted Experiences</h2>
        <div>
            <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
        </div>
        <p v-if="isLoading">Loading...</p>
        <p v-else-if="!isLoading && error">{{ error }}</p>
        <p v-else-if="!isLoading && results?.length === 0">
            No stored Experiences found. Start adding sime
        </p>
        <ul v-else>
            <survey-result v-for="result in results" :key="result.id" :name="result.name" :rating="result.rating"></survey-result>
        </ul>
    </base-card>
</section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
    // props: ['results'],
    components: {
        SurveyResult,
    },
    data() {
        return {
            results: [],
            isLoading: false,
            error: null,
        };
    },
    methods: {
        loadExperiences() {
            this.isLoading = true;
            const res = fetch('https://vue-survey-8cf73.firebaseio.com/surveys.json');
            res
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        this.isLoading = false;
                        this.error = 'Failed to fetch data - please try again later.';
                        throw new Error('Could not get data!')
                    }
                })
                .then((data) => {
                    if (!this.error) {
                        this.isLoading = false;
                        this.error = null;
                        const results = [];
                        for (const id in data) {
                            results.push({
                                id: id,
                                name: data[id].name,
                                rating: data[id].rating,
                            });
                        }
                        this.results = results;
                    }
                })
                .catch(() => {
                    this.isLoading = false;
                    this.error = 'Failed to fetch data - please try again later.';
                });
        },
    },
    mounted() {
        this.loadExperiences();
    },
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>
