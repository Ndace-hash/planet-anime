<template>
  <div class="my-4" v-if="details != null">
    <div class="flex flex-col md:flex-row gap-4 items-center">
      <div class="w-1/3 shrink-0">
        <img :src="details.image" :alt="details.name" class="w-full h-full" />
      </div>
      <div>
        <h1 class="font-bold text-xl">
          <span class="text-base font-medium">Title : </span>{{ details.name }}
        </h1>
        <h5 class="font-medium text-sm mt-1">{{ details.release }}</h5>
        <h5 class="font-medium text-sm mt-1">
          <span>Status : </span>{{ details.status }}
        </h5>
        <h5 class="font-medium text-sm mt-1">
          <span>Anime Type : </span>{{ details.type }}
        </h5>
        <h5 class="font-medium text-sm mt-1">
          <span>Genres : </span>
          <span v-for="g in details.genres">{{ g.genre }}</span>
        </h5>
        <p class="text-xs leading-6 mt-2">{{ details.summary }}</p>
      </div>
    </div>
    <div class="episodes mt-4 border-t-2 p-2">
      <h3 class="font-bold mb-1">Episodes</h3>
      <div class="flex flex-wrap gap-2 mb-4">
        <button
          v-for="episodes in details.availableEpisodes"
          :key="`${episodes.start_episode}-${episodes.end_episode}`"
          class="underline"
          @click="
            () => changeList(episodes.start_episode, episodes.end_episode)
          "
        >
          {{ episodes.start_episode }}-{{ episodes.end_episode }}
        </button>
      </div>

      <div class="flex flex-wrap gap-4 items-center justify-center">
        <EpisodeButton
          v-for="i in episodesList"
          :key="i"
          :episode="i"
          :name="name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EpisodeButton from "../components/EpisodeButton.vue";
import { axiosInstance } from "../composables/utils/Axios";
import { useRoute } from "vue-router";
import { ref, onBeforeMount, reactive, watch } from "vue";
export default {
  setup() {
    const route = useRoute();
    const details = ref(null);
    const name = ref("");
    const episodeButtons = reactive({
      start: 0,
      end: 0,
    });
    const episodesList = ref([]);
    watch(episodeButtons, (newValue, oldValue) => {
      let list = [];
      for (let i = newValue.start; i <= newValue.end; i++) {
        if (i != 0) list.push(i);
      }
      episodesList.value = list;
    });
    onBeforeMount(async () => {
      try {
        name.value = route.params.title.replace(":", "");
        name.value = name.value.split(" ").join("-");
        const { data } = await axiosInstance.get(`/${name.value}`);
        details.value = await data;
        episodeButtons.start = details.value.availableEpisodes[0].start_episode;
        episodeButtons.end = details.value.availableEpisodes[0].end_episode;
      } catch (err) {
        console.error(err);
      }
    });

    const changeList = (startEp, endEp) => {
      episodeButtons.start = startEp;
      episodeButtons.end = endEp;
    };

    return {
      name,
      details,
      episodesList,
      changeList,
    };
  },
  components: { EpisodeButton },
};
</script>
