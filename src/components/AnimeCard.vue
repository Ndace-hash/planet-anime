<template>
  <div
    class="w-[200px] h-[100px] shrink-0 object-fit overflow-hidden flex items-center justify-center cursor-pointer hover:border-white border-2 border-transparent"
    @click="viewAnime"
  >
    <img :src="anime.image" :alt="anime.title" class="w-full" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup(props) {
    const router = useRouter();

    const viewAnime = () => {
      const name = props.anime.title;
      router.push({
        name: "Anime-detail",
        params: {
          title: name,
        },
      });
    };

    return { viewAnime };
  },
  props: {
    anime: Object,
  },
};
</script>
