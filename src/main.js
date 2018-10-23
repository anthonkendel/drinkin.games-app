import 'regenerator-runtime/runtime';
import App from '@/App.vue';
import '@/firebase/firebase';
import '@/registerServiceWorker';
import router from '@/router/router';
import store from '@/store/store';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import 'bulma';
import Vue from 'vue';

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
