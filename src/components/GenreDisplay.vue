<template>
  <GenreDisplaySkeleton v-if="isLoading" />

  <div v-else>
    <h2 class="font-semibold text-xl capitalize my-2">{{ genre }}</h2>
    <div class="scroll-list w-full gap-2 h-max flex overflow-x-scroll">
      <AnimeCard v-for="anime in animeList" :anime="anime" :key="anime.title" />
    </div>
  </div>
</template>

<script>
import GenreDisplaySkeleton from "../components/loader/GenreDisplaySkeleton.vue";

import AnimeCard from "./AnimeCard.vue";
import { axiosInstance } from "../composables/utils/Axios";
import { ref, onMounted } from "vue";
export default {
  setup(props) {
    const animeList = ref([]);
    const isLoading = ref(false);
    onMounted(async () => {
      isLoading.value = true;
      const { data } = await axiosInstance.get(`/gl?link=${props.link}`);
      animeList.value = [...data];
      isLoading.value = false;
    });

    return { animeList, isLoading };
  },
  props: {
    genre: String,
    link: String,
  },
  components: {
    AnimeCard,
    GenreDisplaySkeleton,
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
