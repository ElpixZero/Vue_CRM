import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/Login.vue"),
    meta: { layout: "empty" }
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("./views/Categories.vue"),
    meta: { layout: "main" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
