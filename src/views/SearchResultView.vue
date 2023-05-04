<template>
  <div>
    <h2 class="font-semibold capitalize">
      Related to {{ $route.query.keyword }}
    </h2>
    <div class="flex flex-wrap items-center justify-center gap-4">
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

    onBeforeMount(async () => {
      isLoading.value = true;
      searchTerm.value = route.query.keyword.replace(":", "");
      searchTerm.value = searchTerm.value.split(" ").join("%20");

      const { data } = await axiosInstance.get(
        `/search?keyword=${searchTerm.value}`
      );
      searchList.value = [...data];
      isLoading.value = false;
    });

    return { searchList, isLoading };
  },
  components: {
    AnimeCard,
    AnimeCardSkeleton,
  },
};
</script>
