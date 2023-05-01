<template>
  <div>
    <h1 class="font-semibold text-xl">
      <span class="text-base">Title : </span>{{ details.name }}
    </h1>
    <div>
      <img :src="details.image" :alt="details.name" />
    </div>
  </div>
</template>

<script>
import { axiosInstance } from "../composables/utils/Axios";
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";
export default {
  setup() {
    const route = useRoute();
    const details = ref(null);
    const name = ref("");

    onBeforeMount(async () => {
      try {
        name.value = route.params.title.replace(":", "");
        name.value = name.value.split(" ").join("-");
        const { data } = await axiosInstance.get(`/${name.value}`);
        details.value = await data;
        console.log(details.value);
      } catch (err) {
        console.error(err);
      }
    });

    return {
      details,
    };
  },
};
</script>
