<template>
<div>
    <header>
        <h1>App</h1>
    </header>
    <div style="column-count:2, column-gap: 40px;">
        <div class="row">
            <div class="comp">
                <user-data @username-changed-event="usernameChangedEvent" @age-changed-event="ageChangedEvent"></user-data>
            </div>
            <div class="comp">
                <active-user :username="username" :age="age"></active-user>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            age: 0,
        };
    },
    methods: {
        usernameChangedEvent(username) {
            console.log('username', username);
            this.username = username;
        },
        ageChangedEvent(age) {
            console.log('age', age);
            this.age = age;
        },
    },
};
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

body {
    margin: 0;
}

section {
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc
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

#app .comp {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 100%;
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
