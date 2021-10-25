<template>
  <div id="nav">
    <Home framework="VueTS"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./views/Home.vue";

export default defineComponent({
  name: "FrameworkHero",
  components: {
    Home,
  }
});
</script>

<style>

</style>
