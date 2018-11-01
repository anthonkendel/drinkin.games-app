import Home from '@/components/Home.vue';
import GameDetails from '@/components/GameDetails.vue';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/:id',
      name: 'GameDetails',
      props: true,
      component: GameDetails,
    },
  ],
});

export default router;
