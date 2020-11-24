<template>
<base-card>
    <h2>Find your Coach:</h2>
    <span class="filter-option">
        <div class="form-control">
            <input type="checkbox" id="frontend" checked @change="setFilter" />
            <label for="frontend">Frontend</label>
        </div>
        <div class="form-control">
            <input type="checkbox" id="backend" checked @change="setFilter" />
            <label for="backend">Backend</label>
        </div>
        <div class="form-control">
            <input type="checkbox" id="career" checked @change="setFilter" />
            <label for="career">Career</label>
        </div>
    </span>
</base-card>
</template>

<script>
export default {
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true,
            },
        };
    },
    methods: {
        setFilter(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive,
            };
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters);
        },
    },
};
</script>

<style scoped>
@import '../../styles/coach-filter.css';
</style>
