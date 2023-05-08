<template>
  <h1 v-if="error !== null" class="text-xl text-red-400 font-bold">
    Something went wrong! Check your internet connection and refresh page.
  </h1>
  <GenreDisplay
    v-for="genre in genres"
    :genre="genre.genre"
    :link="genre.link"
    :key="genre.link"
    v-else
  />
</template>

<script>
import GenreDisplay from "../components/GenreDisplay.vue";
import { ref, onMounted } from "vue";
import { axiosInstance } from "../composables/utils/Axios";
export default {
  setup() {
    const genres = ref([]);
    const error = ref(null);
    onMounted(async () => {
      try {
        const { data } = await axiosInstance.get("/genres");

        for (let index = 0; index < 15; index++) {
          genres.value.push(data[index]);
        }
      } catch (e) {
        error.value = { code: e.code, message: e.message };
      }
    });

    return { genres, error };
  },
  components: {
    GenreDisplay,
  },
};
</script>
