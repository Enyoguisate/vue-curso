<template>
<div>
    <base-dialog :show="!!error" title="An Error Ocurred Authenticating" @close="closeErrorDialog">
        {{ error }}
    </base-dialog>
    <base-dialog :show="isLoading" fixed title="Authenticating...">
        <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitForm">
            <h1>{{ formHeader }}</h1>
            <div class="form-control" :class="{ errors: !email.isValid && email.touched }">
                <label for="email">Email</label>
                <input type="email" id="email" v-model.trim="email.value" placeholder="Enter you email" @blur="validateForm" @change="emailChanged" />
                <p v-if="!email.isValid">
                    The email field is required and must not be empty
                </p>
            </div>
            <div class="form-control" :class="{ errors: !password.isValid && password.touched }">
                <label for="password">Password</label>
                <input type="password" id="password" v-model.trim="password.value" placeholder="Enter your password" @blur="validateForm" @change="passwordChanged" />
                <p v-if="!password.isValid">
                    The password field is required and must not be empty
                </p>
            </div>
            <div v-if="!isValidForm">
                <p :class="{ errors: !isValidForm }">
                    You must complete both fields to login
                </p>
            </div>
            <div class="form-control">
                <base-button type="submit" :link="false">
                    {{ changeLoginCaption }}
                </base-button>
                <base-button type="button" :link="false" mode="outlined" @click="switchAuthMode">
                    {{ changeSwitchCaption }}
                </base-button>
            </div>
        </form>
    </base-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            email: {
                value: '',
                isValid: true,
                touched: false,
            },
            password: {
                value: '',
                isValid: true,
                touched: false,
            },
            isValidForm: true,
            mode: 'login',
            isLoading: false,
            error: null,
        };
    },
    methods: {
        submitForm() {
            if (this.mode === 'login') {
                this.login();
            } else {
                this.signup();
            }
        },
        async login() {
            if (this.email.touched && this.password.touched) {
                this.validateForm();
                if (this.isValidForm) {
                    try {
                        this.isLoading = true;
                        await this.$store
                            .dispatch('login', {
                                email: this.email.value,
                                password: this.password.value,
                            })
                            .then(() => {
                                this.isLoading = false;
                                const redirectUrl =
                                    '/' + (this.$route.query.redirect || 'coaches');
                                this.$router.replace(redirectUrl);
                            });
                    } catch (error) {
                        console.log('error', error);
                        this.error = error || 'Failed to Authenticate, try later.';
                        this.isLoading = false;
                    }
                }
            }
        },
        async signup() {
            if (this.email.touched && this.password.touched) {
                this.validateForm();
                if (this.isValidForm) {
                    try {
                        this.isLoading = true;
                        await this.$store
                            .dispatch('signup', {
                                email: this.email.value,
                                password: this.password.value,
                            })
                            .then(() => {
                                this.isLoading = false;
                                this.$router.go('/auth');
                            });
                    } catch (error) {
                        console.log('error', error);
                        this.error = error || 'Failed to Authenticate, try later.';
                        this.isLoading = false;
                        this.$router.replace('/auth');
                    }
                }
            }
        },
        switchAuthMode() {
            if (this.mode === 'login') {
                this.mode = 'signup';
                this.clearFields();
            } else {
                this.mode = 'login';
                this.clearFields();
            }
        },
        validateForm() {
            this.setValidForm();
            if (this.email.value === '') {
                this.email.isValid = false;
                this.setinvalidForm();
            } else {
                this.email.isValid = true;
            }
            if (this.password.value === '') {
                this.password.isValid = false;
                this.setinvalidForm();
            } else {
                this.password.isValid = true;
            }
        },
        emailChanged() {
            this.email.touched = true;
        },
        passwordChanged() {
            this.password.touched = true;
        },
        setinvalidForm() {
            this.isValidForm = false;
        },
        setValidForm() {
            this.isValidForm = true;
        },
        clearFields() {
            this.email.value = null;
            this.password.value = null;
            this.email.touched = false;
            this.password.touched = false;
        },
        closeErrorDialog() {
            this.error = null;
        },
    },
    computed: {
        formHeader() {
            return this.mode.toUpperCase();
        },
        changeLoginCaption() {
            return this.mode === 'login' ? 'Login' : 'Signup';
        },
        changeSwitchCaption() {
            return this.mode === 'login' ? 'Signup instead' : 'Login';
        },
    },
};
</script>

<style scoped>
@import '../../styles/auth.css';
</style>
