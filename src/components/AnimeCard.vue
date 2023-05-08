<template>
  <div
    class="w-[200px] h-[300px] shrink-0 object-fill overflow-hidden flex items-center justify-center cursor-pointer hover:border-white border-2 border-transparent relative"
    @click="viewAnime"
  >
    <img
      :src="anime.image"
      :alt="anime.title || anime.name"
      class="w-full h-full"
    />
    <div
      class="absolute w-full bg-black opacity-80 bottom-0 left-0 h-[60px] flex items-center justify-center"
    >
      <h3 class="text-sm font-semibold text-center">
        {{ anime.title || anime.name }}
      </h3>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup(props) {
    const router = useRouter();

    const viewAnime = () => {
      const name = props.anime.title || props.anime.name;
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
