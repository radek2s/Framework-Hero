<template>
  <div>
    <span>{{welcomeMessage}}</span>
    <span>{{framework}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface State {
  welcomeMessage: string;
}

export default defineComponent({
  name: "Home",
  
  props: {
    framework: String,
  },

  data: (): State => {
    return {
      welcomeMessage: 'Hello from ',
    }
  }
  
});
</script>
