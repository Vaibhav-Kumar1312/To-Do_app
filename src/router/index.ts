import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Signup from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Signup,
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
    path: "/SignIn",
    name: "sgnin",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
