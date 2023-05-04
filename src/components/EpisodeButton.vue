<template>
  <button
    @click="() => getEpisodeLink(episode)"
    class="w-[80px] h-[30px] border flex items-center justify-center py-3 cursor-pointer relative"
    :disabled="isLoading"
  >
    Ep. {{ episode }}
    <div
      class="absolute inset-0 bg-black opacity-70 z-10 backdrop-blur-md flex justify-center items-center gap-2"
      v-if="isLoading"
    >
      <span class="loader w-[8px] h-[8px] rounded-full bg-white"></span>
      <span class="loader w-[8px] h-[8px] rounded-full bg-white"></span>
      <span class="loader w-[8px] h-[8px] rounded-full bg-white"></span>
    </div>
  </button>
</template>

<script>
import { axiosInstance } from "../composables/utils/Axios";
import { ref } from "vue";
export default {
  setup(props) {
    const isLoading = ref(false);
    const getEpisodeLink = async (episode) => {
      isLoading.value = true;
      const { data } = await axiosInstance.get(
        `/${props.name}/episode?number=${episode}`
      );
      window.open(data.download_link, "_blank");
      isLoading.value = false;
    };

    return {
      isLoading,
      getEpisodeLink,
    };
  },
  props: {
    episode: Number,
    name: String,
  },
};
</script>

<style scoped>
span.loader {
  animation: scaling 1s ease-in infinite alternate;
}
span.loader:nth-child(2) {
  animation: scaling 1s 300ms ease-in infinite alternate;
}
span.loader:nth-child(3) {
  animation: scaling 1s 600ms ease-in infinite alternate;
}
@keyframes scaling {
  to {
    transform: scale(1.4);
  }
}
</style>
