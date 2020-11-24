<template>
<ul>
    <li @click="selectRating('poor')" :class="{ active: activeOption === 'poor' }">
        <button type="button">Poor</button>
    </li>
    <li @click="selectRating('avg')" :class="{ active: activeOption === 'avg' }">
        <button type="button">Average</button>
    </li>
    <li @click="selectRating('grt')" :class="{ active: activeOption === 'grt' }">
        <button type="button">Great</button>
    </li>
</ul>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update: modelValue'],
    computed: {
        activeOption() {
            return this.modelValue;
        },
    },
    methods: {
        selectRating(rating) {
            this.activeOption = rating;
            this.$emit('update:modelValue', rating);
        },
    },
};
</script>

<style scoped>
.active {
    border-color: #a00078;
}

.active button {
    color: #a00078;
}

ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: inherit;
}
</style>
