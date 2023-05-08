<template>
  <div class="w-full min-h-[350px]">
    <h2 class="w-24 h-4 text-xl capitalize my-2 rounded-xl"></h2>
    <div class="w-full gap-2 flex overflow-x-scroll">
      <AnimeCardSkeleton />
      <AnimeCardSkeleton />
      <AnimeCardSkeleton />
      <AnimeCardSkeleton />
      <AnimeCardSkeleton />
      <AnimeCardSkeleton />
    </div>
  </div>
</template>

<script setup>
import AnimeCardSkeleton from "./AnimeCardSkeleton.vue";
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
h2 {
  animation: pulsing 2s linear infinite;
}
@keyframes pulsing {
  0% {
    background-color: #a3a3a3;
  }
  50% {
    background-color: #514e4e;
  }
  100% {
    background-color: #a3a3a3;
  }
}
</style>
