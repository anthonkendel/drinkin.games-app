import Home from '@/components/Home.vue';
import Game from '@/components/Game.vue';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/game/:id',
      name: 'Game',
      props: true,
      component: Game,
    },
  ],
});

export default router;
