import Vue from 'vue';
import App from './App.vue';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import router from "./router";
import store from "./store.js"

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAlREaldzM_7xRgPWHwgpCZ-DDWa48VBRs",
  authDomain: "goldenquotes-82e81.firebaseapp.com",
  databaseURL: "https://goldenquotes-82e81-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "goldenquotes-82e81",
  storageBucket: "goldenquotes-82e81.appspot.com",
  messagingSenderId: "660711478575",
  appId: "1:660711478575:web:8a523fe609e518901e3dda"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export { database, firebase };

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("logInUser", user);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
