<template>
  <div class="md:px-6 px-2">
    <AppNavbar />
    <slot />
  </div>
</template>

<script>
import AppNavbar from "../components/AppNavbar.vue";
export default {
  components: { AppNavbar },
};
</script>
