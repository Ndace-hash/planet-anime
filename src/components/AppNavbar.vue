<template>
  <header
    class="h-max bg-black flex flex-col md:flex-row items-center justify-between md:gap-6 gap-4 py-3"
  >
    <div id="logo flex items-center justify-center ">
      <RouterLink to="/" class="text-red-600 font-bold md:text-2xl z-50 text-xl"
        >PlanetAnime</RouterLink
      >
    </div>
    <!-- <div
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
    </button> -->
    <div class="flex overflow-hidden rounded-sm">
      <input
        type="text"
        placeholder="Search for animes by name"
        class="text-sm py-1 px-2 w-[300px] text-black flex items-center"
        v-model="searchTerm"
      />
      <button class="px-4 py-2 bg-red-700" @click="search">Find</button>
    </div>
  </header>
</template>

<script>
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const router = useRouter();
    const showNav = ref(false);
    const searchTerm = ref("");

    const search = () => {
      if (!searchTerm.value) return;
      router.push({
        name: "result",
        query: {
          keyword: searchTerm.value,
        },
      });
    };

    return { showNav, searchTerm, search };
  },
  components: { RouterLink },
};
</script>

<style scoped>
.router-link-exact-active {
  @apply font-semibold opacity-100;
}
</style>
