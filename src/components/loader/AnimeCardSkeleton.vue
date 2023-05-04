<template>
  <div
    class="w-[200px] h-[300px] shrink-0 object-fill overflow-hidden flex items-center justify-center cursor-pointer border-2 border-transparent rounded-lg"
  ></div>
</template>

<style scoped>
div {
  animation: pulsing 3s linear infinite;
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
