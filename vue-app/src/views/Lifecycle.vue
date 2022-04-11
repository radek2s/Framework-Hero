<template>
  <div>
    <h1>Component Lifecycle hooks</h1>
    <p>
      Lifecycle Hook is a common name for Component Event that is emitted
      during creation, update or deletion of specific component. This functions
      give an opportunity to add own code at specific stages. In Vue.js there is 
      a about 8 lifecycle hooks that can be used but we can divide them into 3
      categories like: Creation, Update and Deletion.
    </p>

    <h2>Mounting</h2>

    <p>
      Vue gives us an access to 4 creation hooks that are invoked before the 
      component is mounted into the DOM tree. 
    </p>

    <h3>beforeCreate</h3>

    <p>
      This hook is invoked immediately when the instance is initialized after 
      props resolution but before loading data and computed properties. 
    </p>

    <h3>created</h3>

    <p>
      Created method is invoked when instance has finished processing all state-related
      options like reactive data, computed properties, methods and watchers. But still 
      the mounting phase has not been started. So we are not able to access to the DOM and
      $el properties.
    </p>

    <h3>beforeMount</h3>

    <p>
      As previously, beforeMount is called right before the mounting phase. 
      It will soon execute the DOM render effect for the first time.
    </p>

    <h3>mounted</h3>

    <p>
      Finally, mounted hook that is the most used creation lifecycle method. 
      It is called when component has been mounted so we have all properties, 
      watcher, method and other stuff initialized. The component has been attached
      to the DOM tree and has initialized the $el property. Also all of its synchronous
      child components have been mounted (Excluding components inside <code>Suspense</code> trees).
      This hook is used for performing side effects that require DOM access.
      But in this place we can perform an data fetching and other stuff to initialize 
      the component.
    </p>

    <label>PhotoGallery.vue</label>
    <highlightjs language="vue" :code="code0"></highlightjs>
    
    <h2>Updating</h2>

    <p>
      Like in the previous section Vue offers us 2 update hooks: beforeUpdate and updated.
    </p>

    <h3>beforeUpdate</h3>

    <p>
      Is called just before the DOM update phase due the reactive state change.
      The data within this steps has not been updated yet so we can access to the
      DOM state just before the update. In this hook there is also a possibility to
      to modify the reactive state.
    </p>

    <h3>updated</h3>

    <p>
      Is called after the DOM update phase. Do not mutate state here because it will 
      cause an infinite loop. This hook does not provide any information about the previous
      state value so it may be difficult to determine what has changed. But this hook can be
      used to perform specific actions if some condition is met.
    </p>

    <label>Updated.vue</label>
    <highlightjs language="vue" :code="code1"></highlightjs>

    <p>
      Better solution to achieve similar functionality that is offered by Angular or React we
      can use the <code>watch</code> method. This method is used to watch for changes in the
      reactive state. This method is watching for changes of specific property and provide "next"
      and "previous" value to the callback function.
    </p>

    <label>Watch.vue</label>
    <highlightjs language="vue" :code="code2"></highlightjs>

    <p>
      We have to remember that the <code>watch</code> method is watching for changes and 
      it is not a part of the lifecycle hooks.
    </p>

    <h2>Deletion</h2>

    <h3>beforeUnmount</h3>

    <p>
      This hook is called when component instance is still fully functional 
      but the DOM tree is about to be removed. This is the best place to reset
      the Intervals, Timeouts, Async operations and other stuff. 
    </p>

    <h3>unmounted</h3>

    <p>
      Called after the component has been unmounted and all of the component 
      children have been unmounted as well. This hook is used for performing
      clean up of side effects like DOM event listeners or server connections.
    </p>

    <label>PhotoGallery.vue</label>
    <highlightjs language="vue" :code="code3"></highlightjs>    

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default defineComponent({
  name: "Lifecycle",

  components: {
    highlightjs: hljsVuePlugin.component,
  },

  data() {
    return {
      code0: `<template>
    ...
</template>
<script>
export default {
  name: "PhotoGallery",
  data() {
      ...
  },
  mounted() {
    ...
    this.photos = fetchPhotos(this.galleryId);
  }
  ...
};
<script>
<style>
</style>
`,
      code1: `<template>
    ...
</template>
<script>
export default {
  name: "PhotoGallery",
  data() {
      ...
  },
  updated() {
    ...
    if(this.photos.length === 0) {
      showEmptyDialog();
    }
  }
  ...
};
<script>
<style>
</style>`,
      code2: `<template>
    ...
</template>
<script>
export default {
  name: "PhotoGallery",
  data() {
      ...
  },
  watch: {
    ...
    galleryId(newValue, oldValue) {
      if(newValue !== oldValue) {
        this.photos = fetchPhotos(newValue);
      }
    }
  }
  ...
};
<script>
<style>
</style>`,
      code3: `<template>
    ...
</template>
<script>
export default {
  name: "PhotoGallery",
  data() {
      ...
  },
  unmounted() {
    ...
    clearInterval(this.state.refreshInterval);
  }
  ...
};
<script>
<style>
</style>`,
    };
  },
});
</script>
 
<style>
</style>