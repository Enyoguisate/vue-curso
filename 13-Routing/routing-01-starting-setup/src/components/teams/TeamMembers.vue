<template>
<section>
    <h2>{{ teamName }}</h2>
    <ul>
        <user-item v-for="member in members" :key="member.id" :id="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>

    <!--
    <router-link to="/teams/t1" style="margin-right: 10px;">Team 1</router-link>
    <router-link to="/teams/t2">Team 2</router-link>
    <router-link to="/teams/t3" style="margin-left: 10px;">Team 3</router-link>
    -->

    <button @click="previousTeam" v-if="showBackBtn">
        {{ backBtnText }}
    </button>
    <span style="padding: 5px;">{{ currentTeam }}</span>
    <button @click="nextTeam" v-if="showNextBtn">
        {{ nextBtnText }}
    </button>

</section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
    inject: ['users', 'teams'],
    props: ['teamId'],
    components: {
        UserItem,
    },
    data() {
        return {
            teamName: 'Client Consulting',
            members: [],
        };
    },
    methods: {
        previousTeam() {
            let prevTeam = '/teams/t3';
            if (this.teamId === 't3') {
                prevTeam = '/teams/t2';
            } else if (this.teamId === 't2') {
                prevTeam = '/teams/t1';
            }
            this.$router.push(prevTeam);
        },
        nextTeam() {
            let nextTeam = '/teams/t1';
            if (this.teamId === 't2') {
                nextTeam = '/teams/t3';
            } else if (this.teamId === 't1') {
                nextTeam = '/teams/t2';
            }
            this.$router.push(nextTeam);
        },
        loadTeamMember(teamId) {
            const selectedTeam = this.teams.find((team) => team.id === teamId);
            let membersTeam = [];
            selectedTeam.members.forEach((member) => {
                const user = this.users.find((us) => us.id === member);
                if (user) {
                    membersTeam.push(user);
                }
            });
            this.members = membersTeam;
        },
    },
    created() {
        // this.$route.path
        this.loadTeamMember(this.teamId);
    },
    watch: {
        $route() {
            this.loadTeamMember(this.teamId);
        }
    },
    computed: {
        showBackBtn() {
            if (this.teamId === 't2' || this.teamId === 't3') {
                return true;
            } else {
                return false;
            }
        },
        showNextBtn() {
            if (this.teamId === 't1' || this.teamId === 't2') {
                return true;
            } else {
                return false;
            }
        },
        backBtnText() {
            if (this.teamId === 't2') {
                return 'Team 1';
            } else {
                return 'Team 2';
            }
        },
        nextBtnText() {
            if (this.teamId === 't1') {
                return 'Team 2';
            } else {
                return 'Team 3';
            }
        },
        currentTeam() {
            if (this.teamId === 't1') {
                return 'Team 1';
            } else if (this.teamId === 't2') {
                return 'Team 2';
            } else {
                return 'Team 3';
            }
        },
    },
    beforeRouteUpdate(to, from, next) {
        this.loadTeamMember(to.params.teamId);
        // console.log('TM beforeRouteUpdate component');
        // console.log('Global');
        // console.log('to', to);
        // console.log('from', from);
        next();
    },
};
</script>

<style scoped>
section {
    margin: 2rem auto;
    max-width: 40rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    border-radius: 12px;
}

h2 {
    margin: 0.5rem 0;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

button {
    text-decoration: none;
    color: white;
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background-color: #11005c;
}

button:hover,
button:active {
    background-color: orange;
}
</style>
