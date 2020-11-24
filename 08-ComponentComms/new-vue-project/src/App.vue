<template>
<div>
    <header>
        <h1>My Friends</h1>
    </header>
    <add-contact @add-contact="addContact"></add-contact>
    <ul>
        <friend-contact v-for="friend in friends" :key="friend.id" :id="friend.id" :name="friend.name" :phoneNumber="friend.phoneNumber" :email="friend.email" :isFavorite="friend.isFavorite" @toggle-favorite="toggleFavoriteStatus" @delete-contact="deleteContact">
        </friend-contact>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            friends: [{
                    id: "manuel",
                    name: "Manuel Lorenz",
                    email: "mlorenz@mail.com",
                    phoneNumber: 555123333,
                    isFavorite: true,
                },
                {
                    id: "julie",
                    name: "Julie Jones",
                    email: "jjones@mail.com",
                    phoneNumber: 555321222,
                    isFavorite: false,
                },
                {
                    id: "elsa",
                    name: "Elsa bor del encuentro",
                    email: "ebdencuentro@mail.com",
                    phoneNumber: 555231333,
                    isFavorite: false,
                },
                {
                    id: "carlitos",
                    name: "Carlitos Bala",
                    email: "cbala@mail.com",
                    phoneNumber: 555213111,
                    isFavorite: false,
                },
            ],
        };
    },
    methods: {
        toggleFavoriteStatus(id) {
            const favFriend = this.friends.find((friendF) => friendF.id === id);
            favFriend.isFavorite = !favFriend.isFavorite;
        },
        addContact(friend) {
            if (friend) {
                this.friends.unshift(friend);
            }
        },
        deleteContact(friendId) {
            this.friends = this.friends.filter((friendF) => friendF.id !== friendId);
        },
    },
};
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: "Jost", sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li,
form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
}

#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
