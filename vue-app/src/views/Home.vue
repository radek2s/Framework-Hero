<template>
  <div>
    <h1>Some words about Vue.js</h1>
    <p>
      Vue.js is an open-source JavaScript framework for building user interfaces
      and single-page applications. Author of Vue.js is Evan You that is also 
      the main maintainer. It was released in February 2014 so that is the 
      youngest framework from the comparing ones. One of the most popular
      versions of Vue.js in 2021 is Vue.js 2.0 but in 2020 Vue.js 3.0 has been 
      released and many developers are moving to it.
    </p>

    <p>
      Main goal of Vue.js is to make it easy to create user interfaces 
      by incrementally adding features. It provides very adaptable 
      architecture and it is easy to extend it by composiong the components.
      Components are a way to build reusable, encapsulated, and
      composable elements of a web application. Components generally gets an
      input, and changes behavior depending on that changes. Internal methods
      are used to change the state of the component that can be observed for
      example as a change in the DOM. Main library of Vue.js is responsible only
      for the view layer but it has a lot of officially supported libraries and packages.
      It is like the React, every dependency must be installed separately.
      So to provide a routing within the application, developer must install
      external library called Vue Router. It also extending the HTML pages 
      so to build an project with Vue.js it is necessary to install Vue CLI.
    </p>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
