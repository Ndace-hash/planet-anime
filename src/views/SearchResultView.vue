<template>
  <div>
    <h2 class="font-semibold capitalize">
      Related to {{ $route.query.keyword }}
    </h2>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <AnimeCard v-for="anime in searchList" :key="anime.name" :anime="anime" />
    </div>
  </div>
</template>

<script>
import AnimeCard from "../components/AnimeCard.vue";
import { axiosInstance } from "../composables/utils/Axios";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const searchTerm = ref("");
    const searchList = ref([]);

    onBeforeMount(async () => {
      searchTerm.value = route.query.keyword.replace(":", "");
      searchTerm.value = searchTerm.value.split(" ").join("%20");

      const { data } = await axiosInstance.get(
        `/search?keyword=${searchTerm.value}`
      );
      searchList.value = [...data];
    });

    return { searchList };
  },
  components: {
    AnimeCard,
  },
};
</script>
