import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
