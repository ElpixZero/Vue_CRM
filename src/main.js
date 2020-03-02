import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router.js";
import store from "./store";
import dateFilter from "./filters/date.filter";
import messagePlugin from "./utils/message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyD91ZXB8vCk6pNfF8DQMz5cyx70kPlOm24",
  authDomain: "vue-crm-42792.firebaseapp.com",
  databaseURL: "https://vue-crm-42792.firebaseio.com",
  projectId: "vue-crm-42792",
  storageBucket: "vue-crm-42792.appspot.com",
  messagingSenderId: "588663710036",
  appId: "1:588663710036:web:79d6cd1d254f6e1bc868c1",
  measurementId: "G-XRMTL1T1V8"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
