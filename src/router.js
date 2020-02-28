import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Home.vue"),
    meta: { layout: "main" }
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
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("./views/Detail.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/history",
    name: "history",
    component: () => import("./views/History.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/planning",
    name: "planning",
    component: () => import("./views/Planning.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("./views/Profile.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/record",
    name: "record",
    component: () => import("./views/Record.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./views/Register.vue"),
    meta: { layout: "empty" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
