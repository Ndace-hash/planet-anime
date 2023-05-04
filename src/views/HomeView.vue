<template>
  <Suspense>
    <div>
      <GenreDisplay
        v-for="genre in genres"
        :genre="genre.genre"
        :link="genre.link"
        :key="genre.link"
      />
    </div>
    <template #fallback>
      <div>
        <GenreDisplaySkeleton />
        <GenreDisplaySkeleton />
        <GenreDisplaySkeleton />
        <GenreDisplaySkeleton />
      </div>
    </template>
  </Suspense>
</template>

<script>
import GenreDisplay from "../components/GenreDisplay.vue";
import GenreDisplaySkeleton from "../components/loader/GenreDisplaySkeleton.vue";
import { ref, onMounted, Suspense } from "vue";
import { axiosInstance } from "../composables/utils/Axios";
export default {
  setup() {
    const genres = ref([]);
    onMounted(async () => {
      const { data } = await axiosInstance.get("/genres");

      for (let index = 0; index < 15; index++) {
        genres.value.push(data[index]);
      }
    });

    return { genres };
  },
  components: {
    GenreDisplay,
    GenreDisplaySkeleton,
    Suspense,
  },
};
</script>
