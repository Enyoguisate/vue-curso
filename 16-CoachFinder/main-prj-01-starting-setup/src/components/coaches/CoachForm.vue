<template>
<form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
        <label for="firstname">Firstname</label>
        <input type="text" id="firstname" v-model.trim="firstName.val" @blur="clearValidity('firstName')" />
        <p v-if="!firstName.isValid">Firstname can not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
        <label for="lastname">Lastname</label>
        <input type="text" id="lastname" v-model.trim="lastName.val" @blur="clearValidity('lastName')" />
        <p v-if="!lastName.isValid">Lastname can not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
        <label for="description">Description</label>
        <textarea rows="5" id="description" v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
        <p v-if="!description.isValid">Description can not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
        <label for="hourlyrate">Hourly Rate ($)</label>
        <input type="number" id="hourlyrate" v-model.number="rate.val" @blur="clearValidity('rate')" />
        <p v-if="!rate.isValid">Hourly Rate must be greater than 0</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
        <h3>Areas of Expertise</h3>
        <div>
            <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" @blur="clearValidity('areas')" />
            <label for="frontend">Frontent</label>
        </div>
        <div>
            <input type="checkbox" id="backend" value="backend" v-model="areas.val" @blur="clearValidity('areas')" />
            <label for="backend">Backend</label>
        </div>
        <div>
            <input type="checkbox" id="career" value="career" v-model="areas.val" @blur="clearValidity('areas')" />
            <label for="career">Career</label>
        </div>
        <p v-if="!areas.isValid">Please select an Area of expertise</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button type="submit">Register</base-button>
</form>
</template>

<script>
export default {
    emits: ['submit-data'],
    data() {
        return {
            firstName: {
                val: '',
                isValid: true,
            },
            lastName: {
                val: '',
                isValid: true,
            },
            description: {
                val: '',
                isValid: true,
            },
            rate: {
                val: null,
                isValid: true,
            },
            areas: {
                val: [],
                isValid: true,
            },
            formIsValid: true,
        };
    },
    methods: {
        clearValidity(input) {
            this[input].isValid = true;
            this.validateForm();
        },
        submitForm() {
            this.validateForm();
            const formData = {
                firstName: this.firstName.val,
                lastName: this.lastName.val,
                description: this.description.val,
                rate: this.rate.val,
                areas: this.areas.val,
            };
            this.$emit('submit-data', formData);
        },
        validateForm() {
            this.validForm();
            if (this.firstName.val === '') {
                this.firstName.isValid = false;
                this.invalidForm();
            } else {
                this.firstName.isValid = true;
            }
            if (this.lastName.val === '') {
                this.lastName.isValid = false;
                this.invalidForm();
            } else {
                this.lastName.isValid = true;
            }
            if (this.description.val === '') {
                this.description.isValid = false;
                this.invalidForm();
            } else {
                this.description.isValid = true;
            }
            if (this.rate.val === null || this.rate.val < 1) {
                this.rate.isValid = false;
                this.invalidForm();
            } else {
                this.rate.isValid = true;
            }
            if (this.areas.val && this.areas.val.length === 0) {
                this.areas.isValid = false;
                this.invalidForm();
            } else {
                this.areas.isValid = true;
            }
        },
        validForm() {
            this.formIsValid = true;
        },
        invalidForm() {
            this.formIsValid = false;
        },
    },
};
</script>

<style scoped>
@import '../../styles/coach-form.css';
</style>
