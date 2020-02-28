import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router.js";
import store from "./store";
import dateFilter from "./filters/date.filter";
import "materialize-css/dist/js/materialize.min";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.filter("date", dateFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
