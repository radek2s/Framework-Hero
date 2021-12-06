<template>
  <nav>
    <div>
      <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/project-initialization">Project initialization</router-link></li>
          <li><router-link to="/simple-component">Component Example</router-link></li>
          <li><router-link to="/props-component">Component Parameters</router-link></li>
          <li><router-link to="/slots-component">Component Projection</router-link></li>
          <li><router-link to="/extend-component">Extending components</router-link></li>
          <li><router-link to="/services-component">Service</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Navbar",
});
</script>
 
<style scoped>
nav {
  width: 200px;
  height: 100vh;
  float: left;
  background: rgba(163, 116, 116, 0.15);
  background: linear-gradient(
    90deg,
    rgba(49, 49, 49, 0.65) 10%,
    rgba(33, 33, 33, 0.65) 90%
  );
  backdrop-filter: blur(20px);
  color: white;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
}
ul {
  padding: 0;
}

ul > li {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 0 0 15px;
  border: 1px solid rgba(0, 0, 0, 0);
  animation-name: fadeOutHover;
  animation-iteration-count: 1;
  animation-timing-function: decelerate;
  animation-duration: 100ms;
}
ul > li:hover {
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.15);
  animation-name: fadeInHover;
  animation-iteration-count: 1;
  animation-timing-function: decelerate;
  animation-duration: 100ms;
  /* animation-delay: 50ms; */
}
ul > li > a[href] {
  color: white;
  text-decoration: none;
}

@keyframes fadeInHover {
  0% {
    border: 1px solid rgba(255, 255, 255, 0);
    background: rgba(0, 0, 0, 0);
  }
  100% {
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.15);
  }
}

@keyframes fadeOutHover {
  0% {
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.15);
  }
  100% {
    border: 1px solid rgba(255, 255, 255, 0);
    background: rgba(0, 0, 0, 0);
  }
}
</style>
