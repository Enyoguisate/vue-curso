<template>
<form>

    <h1>Add New Friend Contact</h1>

    <div id="firstname">
        <label for="name">First Name</label>
        <input type="text" placeholder="Insert your first name" id="user_firstname" name="user_firstname" v-model="firstname" />
    </div>

    <div id="lastname">
        <label for="lastname">Last Name</label>
        <input type="text" placeholder="Insert your last name" id="user_lastname" name="user_lastname" v-model="lastname" />
    </div>

    <div id="phone">
        <label for="phone">Phone</label>
        <input type="phone" placeholder="Insert your phone" id="user_phone" name="user_phone" v-model="phone" />
    </div>

    <div id="email">
        <label for="email">Email</label>
        <input type="email" placeholder="Insert your email" id="user_email" name="user_email" v-model="email" />
    </div>

    <div id="favorite">
        <label><input type="checkbox" value="first_checkbox" id="user_favorite" name="user_favorite" v-model="isFavorite" />
            Is Favorite</label><br />
    </div>

    <div class="button">
        <button type="button" @click="addContact">Add Contact</button>
    </div>
</form>
</template>

<script>
export default {
    emits: {
        "add-contact": function ({
            firstname,
            lastname,
            phone,
            email,
            isFavorite,
        }) {
            if (firstname && lastname && phone && email && isFavorite) {
                return true;
            } else {
                console.log("There are Missing values in the form");
                return false;
            }
        },
    },
    data() {
        return {
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            isFavorite: "",
        };
    },
    methods: {
        addContact() {
            this.$emit("add-contact", {
                id: this.firstname,
                name: this.firstname + " " + this.lastname,
                phoneNumber: this.phone,
                email: this.email,
                isFavorite: this.isFavorite,
            });
            this.clearForm();
        },
        clearForm() {
            (this.firstname = ""),
            (this.lastname = ""),
            (this.phone = ""),
            (this.email = ""),
            (this.isFavorite = "");
        },
    },
};
</script>

<style>
#firstname,
#lastname,
#phone,
#email,
#favorite,
#button {
    display: grid;
    margin-bottom: 5px;
    padding: 5px;
}
</style>
