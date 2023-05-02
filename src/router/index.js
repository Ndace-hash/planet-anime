import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AnimeView from "../views/AnimeView.vue";
import SearchResultView from "../views/SearchResultView.vue";

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
  {
    name: "result",
    path: "/result",
    component: SearchResultView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
