<template>
  <div
    class="w-[200px] h-[100px] shrink-0 object-fit overflow-hidden flex items-center justify-center"
  >
    <img :src="anime.image" :alt="anime.title" class="w-full" />
  </div>
</template>

<script>
export default {
  props: {
    anime: Object,
  },
};
</script>
