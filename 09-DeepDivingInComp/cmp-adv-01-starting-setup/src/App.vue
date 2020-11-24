<template>
<div>
    <!-- <the-header></the-header>-->
    <TheHeader />
    <!--
    <badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>
    <course-goals #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps["another-prop"] }}</p>
    </course-goals>
    -->
    <button @click="setSelectedeComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedeComponent('manage-goals')">Manage Goals</button>
    <!-- <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>
     <active-goals v-if="selectedComponent === 'active-goals'"></active-goals> -->
    <keep-alive>
        <component v-bind:is="selectedComponent"></component>
    </keep-alive>
</div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ManageGoals from "./components/goals/ManageGoals.vue";
import ActiveGoals from "./components/goals/ActiveGoals.vue";

export default {
    components: {
        // 'the-header': TheHeader
        // TheHeader: TheHeader
        TheHeader,
        // BadgeList,
        // UserInfo,
        // CourseGoals,
        ManageGoals,
        ActiveGoals
    },
    data() {
        return {
            selectedComponent: 'active-goals',
            activeUser: {
                name: "Maximilian Schwarzmüller",
                description: "Site owner and admin",
                role: "admin",
            },
        };
    },
    methods: {
        setSelectedeComponent(cmp) {
            this.selectedComponent = cmp;
        }
    }
};
</script>

<style>
html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>
