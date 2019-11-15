import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAHh6JXxxfjVrE3HdbGLtEQ0SMf1Ltqubc',
  authDomain: 'platzi-rooms-73f8a.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-73f8a.firebaseio.com',
  projectId: 'platzi-rooms-73f8a',
  storageBucket: 'platzi-rooms-73f8a.appspot.com',
  messagingSenderId: '45930960829',
  appId: '1:45930960829:web:3f93cec1664604d9a864d4',
  measurementId: 'G-2Z60DN8YR0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
