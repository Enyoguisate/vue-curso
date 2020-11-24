<template>
<div>
    <base-dialog title="Error en el Formulario" v-if="showError" @close="closeError">
        <template #description>
            <p>At least one input field is invalid.</p>
            <p>Please check all inputs and make sure you enter a few character.</p>
        </template>
        <template #actions>
            <base-button @click="closeError">Okay</base-button>
        </template>
    </base-dialog>

    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" ref="titleInput" />
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" ref="descInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">link</label>
                <input type="url" id="link" name="link" ref="linkInput" />
            </div>
            <base-button type="submit">Add Resource</base-button>
        </form>
    </base-card>
</div>
</template>

<script>
export default {
    inject: ['addResource'],
    data() {
        return {
            showError: false,
        };
    },
    methods: {
        submitData() {
            this.showError = false;
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDescription = this.$refs.titleInput.value;
            const enteredLink = this.$refs.linkInput.value;
            if (enteredTitle && enteredDescription && enteredLink) {
                this.addResource(enteredTitle, enteredDescription, enteredLink);
            } else {
                this.showError = true;
            }
            console.log('this.showError', this.showError);
        },
        closeError() {
            this.showError = false;
        },
    },
};
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>
