import Vue from 'vue';
import firebase from 'firebase';
import firebaseConfig from './config';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');
