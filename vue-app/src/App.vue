<template>
  <div>
    <Navbar></Navbar>
    <header>
      <Topbar></Topbar>
    </header>

    <main>
      <section>
        <router-view></router-view>
      </section>
    </main>

    <footer></footer>
  </div>
  <!-- <div id="nav">
    <Home framework="VueTS"/>
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./views/Home.vue";
import Navbar from "./layout/Navbar.vue";
import Topbar from "./layout/Topbar.vue";

export default defineComponent({
  name: "FrameworkHero",
  components: {
    Navbar,
    Topbar,
  },
});
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  background-color: #333333;
  color: white;
  overflow: hidden;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-image: url("./assets/background.jpg");
  background-position: center;
  height: 100vh;
}

p > code,
ul > li > code {
  background-color: #9696967a;
  padding: 3px;
}

section {
  width: 80vw;
  margin-left: calc(200px + 5vw);
  background-color: rgb(255 255 255 / 90%);
  background: linear-gradient(
    90deg,
    rgb(247 247 247 / 85%) 10%,
    rgb(234 234 234 / 95%) 90%
  );
  backdrop-filter: blur(20px);
  min-height: 50vh;
  color: black;
  margin-top: 15px;
  border-radius: 5px;
  padding: 30px;
  box-sizing: border-box;
  max-height: 90vh;
  overflow-y: auto;
}

@media screen and (max-width: 1024px) {
  section {
    width: 70vw;
  }
}

@media screen and (max-width: 768px) {
  section {
    width: 60vw;
  }
}

@media screen and (max-width: 640px) {
  #app nav {
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 54px;
    max-height: 15vh;
    overflow: auto;
  }
  #app .topbar {
    width: 100%;
  }
  #app section {
    width: calc(100vw - 20px);
    height: 75vh;
    margin: calc(54px + 10vh) 10px 10px 10px; 
  }
}

</style>
