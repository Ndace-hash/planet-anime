<template>
  <h1 v-if="error !== null" class="text-xl text-red-400 font-bold">
    Something went wrong! Check your internet connection and refresh page.
  </h1>
  <div v-else>
    <h2 class="font-semibold capitalize">
      Related to {{ $route.query.keyword }}
    </h2>
    <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
      <AnimeCardSkeleton v-if="isLoading" />
      <AnimeCardSkeleton v-if="isLoading" />
      <AnimeCardSkeleton v-if="isLoading" />
      <AnimeCardSkeleton v-if="isLoading" />
      <AnimeCardSkeleton v-if="isLoading" />
      <AnimeCardSkeleton v-if="isLoading" />
      <AnimeCardSkeleton v-if="isLoading" />
      <AnimeCardSkeleton v-if="isLoading" />

      <AnimeCard
        v-for="anime in searchList"
        :key="anime.name"
        :anime="anime"
        v-else
      />
    </div>
  </div>
</template>

<script>
import AnimeCard from "../components/AnimeCard.vue";
import AnimeCardSkeleton from "../components/loader/AnimeCardSkeleton.vue";
import { axiosInstance } from "../composables/utils/Axios";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const searchTerm = ref("");
    const searchList = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    onBeforeMount(async () => {
      try {
        isLoading.value = true;
        searchTerm.value = route.query.keyword.replace(":", "");
        searchTerm.value = searchTerm.value.split(" ").join("%20");

        const { data } = await axiosInstance.get(
          `/search?keyword=${searchTerm.value}`
        );
        searchList.value = [...data];
        isLoading.value = false;
      } catch (e) {
        error.value = { code: e.code, message: e.message };
        isLoading.value = false;
      }
    });

    return { searchList, isLoading, error };
  },
  components: {
    AnimeCard,
    AnimeCardSkeleton,
  },
};
</script>
