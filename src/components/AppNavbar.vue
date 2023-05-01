<template>
  <header class="h-[50px] bg-black flex items-center justify-between md:gap-6">
    <div id="logo flex items-center justify-center ">
      <h1 class="text-white font-bold md:text-2xl z-50 text-xl">PlanetAnime</h1>
    </div>
    <div
      class="wrapper items-center md:justify-between md:flex-row w-full flex-col absolute top-0 left-0 md:flex md:static h-screen justify-center md:bg-transparent bg-black z-10"
      :class="showNav ? 'flex' : 'hidden'"
    >
      <nav class="menu flex items-center gap-4 flex-col md:flex-row">
        <li class="list-none capitalize">
          <RouterLink to="/" class="opacity-80">Home</RouterLink>
        </li>
        <li class="list-none capitalize">
          <RouterLink to="/movies" class="opacity-80">Movies</RouterLink>
        </li>
        <li class="list-none capitalize">
          <RouterLink to="/popular" class="opacity-80">Popular</RouterLink>
        </li>
        <li class="list-none capitalize">
          <RouterLink to="/favorites" class="opacity-80">Favorites</RouterLink>
        </li>
      </nav>
      <RouterLink to="/search" class="text-center">search</RouterLink>
    </div>
    <button
      class="md:hidden z-20"
      @click="
        () => {
          showNav = !showNav;
        }
      "
    >
      menu
    </button>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const showNav = ref(false);

    return { showNav };
  },
  components: { RouterLink },
};
</script>

<style scoped>
.router-link-exact-active {
  @apply font-semibold opacity-100;
}
</style>
