import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import logIn from "../views/logIn.vue";
import SignIn from "../views/logInLinks/SignIn.vue";
import SignUp from "../views/logInLinks/SignUp.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // {
  //   path: "/",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/logIn",
    name: "logIn",
    component: logIn,
  },
  {
    path: "/logInLinks/SignIn.vue",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/logInLinks/SignUp.vue",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
