<template>
<div>
    <div class="container">
        <users-list></users-list>
    </div>
    <div class="container">
        <div class="block" :class="{ animateRight: animatedBlock, animateLeft: !animatedBlock }"></div>
        <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
        <transition :css="false" name="parag" @before-enter="befEnter" @Pbefore-leave="befLeave" @enter="entered" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave" @enter-cancelled="enterCancelled" @leave-cancelled="leaveCancelled">
            <p v-if="paraIsVisible">This is only sometimes visible</p>
        </transition>
        <button @click="toggleParagraph">Toggle Paragraph</button>
    </div>
    <div class="container">
        <transition name="fade-button" mode="out-in">
            <button @click="toggleUser" v-if="!isUser">Show Users</button>
            <button @click="toggleUser" v-else>Hide Users</button>
        </transition>
    </div>

    <base-modal @close="hideDialog" :open="dialogIsVisible">
        <p>This is a test dialog!</p>
        <button @click="hideDialog">Close it!</button>
    </base-modal>

    <div class="container">
        <button @click="showDialog">Show Dialog</button>
    </div>
</div>
</template>

<script>
import UsersList from './components/UsersList.vue';

export default {
    components: {
        'users-list': UsersList,
    },
    data() {
        return {
            dialogIsVisible: false,
            animatedBlock: false,
            paraIsVisible: false,
            isUser: false,
            leaveInterval: null,
            enterInterval: null,
        };
    },
    methods: {
        showDialog() {
            this.dialogIsVisible = true;
        },
        hideDialog() {
            this.dialogIsVisible = false;
        },
        animateBlock() {
            this.animatedBlock = !this.animatedBlock;
        },
        toggleParagraph() {
            this.paraIsVisible = !this.paraIsVisible;
        },
        toggleUser() {
            this.isUser = !this.isUser;
        },
        befEnter(element) {
            console.log('beforeEnter', element);
            element.style.opacity = 0;
        },
        entered(element, done) {
            console.log('entered', element);
            let round = 1;
            this.enterInterval = setInterval(() => {
                element.style.opacity = round * 0.1;
                round++;
                if (round > 10) {
                    clearInterval(this.enterInterval);
                    done();
                }
            }, 75);
        },
        // afterEnter(element) {
        //     console.log('afterEntered', element);
        // },
        // befLeave(element) {
        //     console.log('beforeLeave', element);
        // },
        leave(element, done) {
            let round = 10;
            this.leaveInterval = setInterval(() => {
                element.style.opacity = round * 0.1;
                round--;
                if (round < 1) {
                    clearInterval(this.leaveInterval);
                    done();
                }
            }, 75);
        },
        // afterLeave(element) {
        //     console.log('afterLeave', element);
        // },
        enterCancelled() {
            clearInterval(this.enterInterval);
        },
        leaveCancelled() {
            clearInterval(this.leaveInterval);
        },
    },
};
</script>

<style>
.fade-button-enter-from,
.fade-button-leave-to {
    opacity: 0;
}

.fade-button-leave-active {
    transition: opacity 0.2s ease-in;
}

.fade-button-enter-active {
    transition: opacity 0.2s ease-out;
}

.fade-button-leave-from,
.fade-button-enter-to {
    opacity: 1;
}

/*
.parag-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.parag-enter-active {
    transition: all 0.6s ease-out;
}

.parag-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.parag-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.parag-leave-active {
    transition: all 0.6s ease-in;
}

.parag-leave-to {
    opacity: 1;
    transform: translateY(-30px);
}*/

.block {
    width: 8rem;
    height: 8rem;
    background-color: #290033;
    margin-bottom: 2rem;
    /* transition: transform .3s ease-out;*/
}

.animateLeft {
    /*transform: translateX(-150px);*/
    animation: slide-scale-left 0.3s ease-out forwards;
    /* animation-play-state: paused*/
}

@keyframes slide-scale-left {
    0% {
        transform: translateX(0) scale(1);
    }

    70% {
        transform: translateX(-120px) scale(1.5);
    }

    100% {
        transform: translateX(-150px) scale(1);
    }
}

.animateRight {
    animation: slide-scale-right 0.3s ease-out forwards;
    /* animation-play-state: paused*/
}

@keyframes slide-scale-right {
    0% {
        transform: translateX(0) scale(1);
    }

    70% {
        transform: translateX(120px) scale(1.5);
    }

    100% {
        transform: translateX(150px) scale(1);
    }
}

* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

body {
    margin: 0;
}

button {
    font: inherit;
    padding: 0.5rem 2rem;
    border: 1px solid #810032;
    border-radius: 30px;
    background-color: #810032;
    color: white;
    cursor: pointer;
}

button:hover,
button:active {
    background-color: #a80b48;
    border-color: #a80b48;
}

.container {
    max-width: 40rem;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    border: 2px solid #ccc;
    border-radius: 12px;
}
</style>
