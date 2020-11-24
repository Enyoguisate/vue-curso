import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    // { path: '/teams', component: TeamsList },
    // { path: '/teams', component: TeamsList, alias: '/' },
    {
      name: 'teams',
      path: '/teams',
      //   component: TeamsList,
      meta: {
        needsAuth: true
      },
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        {
          name: 'team-member',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      // component: UsersList
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        // console.log('beforeEnter Router');
        // console.log('Global');
        // console.log('to', to);
        // console.log('from', from);
        console.log('to.meta.needsAuth', to.meta.needsAuth);
        if (to.meta.needsAuth) {
          console.log('NEEDS AUTH');
          next();
        } else {
          next();
        }
      }
    },
    { path: '/:notFound(.*)', redirect: '/teams' }
  ],
  // linkActiveClass: 'active'
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  }
});

// router.beforeEach(function(to, from, next) {
  // console.log('Global');
  // console.log('to', to);
  // console.log('from', from);
  // next(false); // cancel navigation

  // if (to.name === 'team-member') {
//   next();
  // } else {
  //   next({
  //     name: 'team-member',
  //     params: { teamId: 't2' }
  //   });
  // }
// });

// router.afterEach(function(to, from) {
//   // console.log('afterEach', to, from);
// });

export default router;
