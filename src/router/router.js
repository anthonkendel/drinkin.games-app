import Home from '@/components/Home.vue';
import Details from '@/components/Details.vue';
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
      path: '/:id',
      name: 'Details',
      props: true,
      component: Details,
    },
  ],
});

export default router;
