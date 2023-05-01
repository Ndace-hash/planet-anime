import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AnimeView from "../views/AnimeView.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeView,
  },
  {
    name: "Anime-detail",
    path: "/:title",
    component: AnimeView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
