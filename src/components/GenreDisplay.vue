<template>
  <div>
    <h2 class="font-semibold text-xl capitalize my-2">{{ genre }}</h2>
    <div class="scroll-list w-full gap-2 h-max flex overflow-x-scroll">
      <AnimeCard v-for="anime in animeList" :anime="anime" :key="anime.title" />
    </div>
  </div>
</template>

<script>
import AnimeCard from "./AnimeCard.vue";
import { axiosInstance } from "../composables/utils/Axios";
import { ref, onMounted } from "vue";
export default {
  async setup(props) {
    const animeList = ref([]);
    const { data } = await axiosInstance.get(`/gl?link=${props.link}`);
    animeList.value = [...data];
    // onMounted(async () => {
    // });

    return { animeList };
  },
  props: {
    genre: String,
    link: String,
  },
  components: {
    AnimeCard,
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
