<template>
<section>
    <div id="username">
        <label for="username"><strong>Username</strong></label>
        <input type="text" placeholder="Insert your username" id="username" name="username" v-model="username" @input="usernameChanged" />
    </div>
    <div id="age">
        <label for="age"><strong>Age</strong></label>
        <input type="number" placeholder="Insert your age" id="age" name="age" v-model="age" @input="ageChanged" />
    </div>
</section>
</template>

<script>
export default {
    emits: {
        usernameChangedEvent: function (username) {
            if (username) {
                return true;
            } else {
                console.log("Error on Username");
                return;
            }
        },
        ageChangedEvent: function (age) {
            if (age) {
                return true;
            } else {
                console.log("Error on Age");
                return;
            }
        },
    },
    data() {
        return {
            age: "",
            username: "",
        };
    },
    methods: {
        usernameChanged() {
            console.log("usernameChanged");
            this.$emit("username-changed-event", this.username);
        },
        ageChanged() {
            console.log("ageChanged");
            this.$emit("age-changed-event", this.age);
        },
    },
};
</script>

<style>
</style>
