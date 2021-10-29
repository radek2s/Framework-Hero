<template>
  <div>
    <h1>Project initialization</h1>

    <p>
      Vue.js is a standalone library that contains the core elements required 
      to start building the user interface directly from the HTML page. There 
      is another project called <code>@vue/cli</code> that provides a full system
      that alow developert rapidly build and deploy applications. It ensure 
      various build tools that can be easily tweaked to match the needs of programmer.
      The CLI (Command Line Interface) is a tool that allows you to run commands
      to create a new project or to run the development server. 
    </p>

    <h2>Installing the Vue.js CLI</h2>

    <p>
      Vue CLI requires <a href="https://nodejs.org/en/">Node.js</a> with version 8.9 or above.
      Installing the CLI is as simple as running the following command:
    </p>

    <code>npm install -g @vue/cli</code>

    <p>
      That will install Vue CLI globaly to the Operating System. To verify if it has 
      been installed correctly, run the following command: <code>vue --version</code>
    </p>

    <h2>Project generation</h2>

    <p>
      When the tool has been installed now you can create a new project by running the following command:
    </p>

    <code>vue create framework-hero</code>

    <p>
      Now the project creator will be asking user to decide how the project should looks like
      and what dependencies it should use. 
    </p>

    <h2>Running the development server</h2>

    <p>
      Finally when we have project created we can run the development server to 
      instant prototyping the application. In the main project folder we can run the following command:
    </p>

    <code>vue serve --open</code>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Project",
});
</script>
 
<style>
</style>
