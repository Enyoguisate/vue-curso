<template>
<section class="container">
    <!-- <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2>
    <p>{{ user }}</p>
    <hr />
    <h2>{{ refUserName }}</h2>
    <h2>{{ refUserage }}</h2>
    <hr />
    
    <h2>{{ reactiveUser.name }}</h2>
    <h2>{{ reactiveUser.age }}</h2>
    <p>{{ reactiveUser }}</p>

    <button @click="setNewAge">Change Age</button>

    <div>
        <h2>{{ fullname }}</h2>
    </div>

    <div>
        <input type="text" placeholder="FirstName" v-model="firstname" />
        @input="setFirstName"
        <input type="text" placeholder="LastName" v-model="lastname" />
        -@input="setLastName"
    </div>
    <div>
        <p>{{ lastNameInput.value }}</p>
        <input type="text" placeholder="Last Name Input" ref="lastNameInput" />
        <button @click="setLastNameInput">Set Last Name</button>
    </div>
    -->
    <user-data :user-name="username"></user-data>
</section>
</template>

<script>
import {
    ref,
    provide,
    // reactive,
    // isReactive,
    // isRef,
    // toRefs,
    // computed,
    // watch,
} from 'vue';
import UserData from './components/UserData.vue';
export default {
    components: {
        UserData,
    },
    // data() {
    //   return {
    //     userName: 'Maximilian',
    //   };
    // },
    setup() {
        const username = ref('Maximilian');
        const age = ref(40);
        provide('age', age);

        // const uName = ref('Maximilian');
        // const uAge = ref(40);
        // const user = ref({
        //     name: 'Maximilian',
        //     age: 40,
        // });
        // const firstname = ref('');
        // const lastname = ref('');
        // const lastNameInput = ref(null);

        // watch([firstname, lastname], function (newValue, oldValue) {
        //     console.log('newValue', newValue);
        //     console.log('oldValue', oldValue);
        // });

        // function setFirstName(event) {
        //     firstname.value = event.target.value;
        // }

        // function setLastName(event) {
        //     lastname.value = event.target.value;
        // }

        // function setLastNameInput() {
        //     lastNameInput.value = lastNameInput.value.value;
        // }

        // const reactiveUser = reactive({
        //     name: 'Maximilian',
        //     age: 40,
        // });

        // const fullname = computed(function () {
        //     return `${firstname.value}, ${lastname.value}`;
        // });

        // setTimeout(() => {
        //     user.value.name = 'Max';
        //     user.value.age = 30;
        // }, 2000);

        // setTimeout(() => {
        //     reactiveUser.name = 'Max';
        //     reactiveUser.age = 30;
        // }, 2000);

        // const isUserRef = isRef(user.value);
        // const isReactiveUserReactive = isReactive(reactiveUser.name);
        // console.log('isUserRef', isUserRef);
        // console.log('isReactiveUserReactive', isReactiveUserReactive);

        // const userRefs = toRefs(reactiveUser);
        // console.log('isRef(userRefs)', isRef(userRefs));

        // function setNewData() {
        //     reactiveUser.name = 'Max';
        //     reactiveUser.age = 20;
        // }

        return {
            // user: user,
            // reactiveUser,
            // refUserName: userRefs.name,
            // refUserage: userRefs.age,
            // setNewAge: setNewData,
            // firstname,
            // lastname,
            // setFirstName,
            // setLastName,
            // fullname,
            // setLastNameInput,
            // lastNameInput,
            username,
            age,
        };
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

.container {
    margin: 3rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    text-align: center;
}
</style>
