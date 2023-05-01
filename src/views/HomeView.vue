<template>
  <div>
    <GenreDisplay
      v-for="genre in genres"
      :genre="genre.genre"
      :link="genre.link"
    />
  </div>
</template>

<script>
import GenreDisplay from "../components/GenreDisplay.vue";
import { ref, onMounted } from "vue";
import { axiosInstance } from "../composables/utils/Axios";
export default {
  setup() {
    const genres = ref([]);

    onMounted(async () => {
      const { data } = await axiosInstance.get("/genres");
      for (let index = 0; index < 5; index++) {
        genres.value.push(data[index]);
      }
    });

    return { genres };
  },
  components: {
    GenreDisplay,
  },
};
</script>
