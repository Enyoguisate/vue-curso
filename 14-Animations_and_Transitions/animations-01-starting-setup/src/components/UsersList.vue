<template>
<div>
    <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">
            {{ user }}
        </li>
    </transition-group>
    <div class="form-control">
        <label for="username">Username</label>
        <input type="text" id="username" v-model.trim="username" placeholder="insert name" />
        <button @click="addUser">Add User</button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael'],
            username: '',
        };
    },
    methods: {
        removeUser(user) {
            this.users = this.users.filter((userItem) => userItem != user);
            // this.users.
        },
        addUser() {
            if (this.username) {
                this.users.unshift(this.username);
                this.username = '';
            }
        },
    },
};
</script>

<style scoped>
.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.user-list-enter-active {
    transition: all .8s ease-out;
}

.user-list-leave-from,
.user-list-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.user-list-leave-active {
    transition: all .2s ease-in;
    position: absolute;
}

.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.user-list-move {
    transition: transform 1s ease;
}

ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}

.form-control {
    padding: 5px;
}
</style>
