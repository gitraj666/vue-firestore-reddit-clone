import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import App from './App.vue';
import router from './router';
import store from './store';
import firebase from './firebase';
import auth from './auth'

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
