<template>
  <div>
    <h1>Component Introduction</h1>

    <p>
      <span class="quote">
        "Vue is designed from the ground up to be incrementally adoptable".
      </span>
      <span class="quote--author">
        <a href="https://vuejs.org/v2/guide/">Vue.js Guide.</a>
      </span>
      As the author of the Vue.js framework guide mentions, Vue goal is to
      provide a simple, flexible and easy to maintain framework. It is mostly
      powerful for building single page applications and is open to cooperate
      with other libraries.
    </p>
    <p>
      Vue.js is very similar to React.js in terms of the way it render data on
      the screen. But it is also share the same approach with template section
      that is available in Angular. So to create a web application we will start
      from creating a component that define a custom elements that can be
      reused. Like in React this framework use JavaScript to render the data by
      a virtual DOM. Every data and the DOM elements are reactive and is an
      Vue.js instance. The app is attached to single DOM element on the page and
      rest is done by scripts.
    </p>

    <p>
      Creation of a component is not such a simple task. Why? Because we can do
      it in a many ways. For the begining we will attach the Vue.js component
      into the existing HTML page. To do that we will use the "vue.js" library
      added to the HTML by <code>&lt;script&gt;</code> tag. Vue.js component is
      a JavaScript function that could be called inside the HTML file.
    </p>

    <label>index.html</label>
    <highlightjs language="html" :code="code0"></highlightjs>

    <p>
      When the new Vue instance is called it search for element with ID provided in
      <code>el</code> parameter. In this case we will use <code>#vue_custom_application</code>.
      That is the declarative rendering example. The template of that application is also
      defined inside clear HTML file but it also could be a part of the component.
    </p>

    <h2>Single File Component</h2>
    <p>
      Vue.js is a very flexible framework that can be used for small projects but could be also 
      a base for the bigger projects. So to maintain the code base we can create a <code>*.vue</code> files 
      that define specific Vue.js components. This approach require a build tool like Webpack that 
      will compile the code and prepare standalone application. 
    </p>

    <label>SingleComponentSelector.vue</label>
    <highlightjs language="vue" :code="code1"></highlightjs>

    <p>
      Each Single File Component is a combination of template, script and style sections.
      As I mentioned before Vue.js is a very flexible framework so you can use different 
      languages for each of this section. For purpouse of this project I will use default JavaScript 
      to compare it with the Angular and React.js approach. 
    </p>
    <ul>
      <li>
        <code>template</code> - defines the HTML template that will be rendered
      </li>
      <li>
        <code>script</code> - defines the JavaScript or other language Vue component
        that can contain data, methods and many more things to provide some specific functionality.
      </li>
      <li>
        <code>style</code> - that defines the CSS definitions for the Vue components or just for 
        a single component if it is <code>scoped</code>.
      </li>
    </ul>

    <h2>Basic Vue.js Component</h2>
    <p>
      For smaller projects you will see the approach with components defined inside JavaScript files.
      Component defined with <code>Vue.component()</code> method has its own tag that is used to 
      place that component on the page. Then the framework will create a new instance of that component.
    </p>

    <label>component.js</label>
    <highlightjs language="javascript" :code="code2js"></highlightjs>
    
    <h2>Component usage</h2>

    <p>To use that component defined before we have to use its tag inside Vue instance.</p>

    <label>index.html</label>
    <highlightjs language="html" :code="code2html"></highlightjs>

    <p>
      The <code>basic-component</code> component was globaly registered to Vue instance.
      That components could be reused in other places. 
    </p>
    
    <h2>Root Component</h2>
    <p>
      When project is bigger and use <code>vue-cli</code> to create a Vue.js instance 
      we need a root component that will be the entry point of the application. Single 
      File Components require that definition to be able to provide specific import and 
      export mechanism. Inside <code>public/index.html</code> we can find the 
      <code>&lt;div id="app"&gt;</code> tag that will be used to render the root 
      component defined in <code>App.vue</code>. But the <code>main.js</code> file will contain 
      the the JavaScript initialization code that is loaded by the
      index page and attaching that <code>App</code> component to that <code>div</code> with this <code>#app</code> ID.

    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface State {
  code0: string;
  code1: string;
  code2html: string;
  code2js: string;
}

export default defineComponent({
  name: "Basic",

  props: {
    framework: String,
  },


  data: (): State => {
    return {
      code0: `<html>
  <head> 
    <title>Vue.js embedded</title>
    <script type="text/javascript" src="js/vue.js"><script> 
  </head>

  <body>
        
    <div id="vue_custom_application">
      <h1>Welcome in Vue.js!</h1>
    </div>

    <script>
      var vm = new Vue({
        el: "#vue_custom_application",
      });
    <script>

  </body>
</html>`,
    code1:`<template>
<h1>Hello from Vue.js SFC</h1>
</template>
<script>
export default {
  name: "SingleComponentSelector",
};
<script>
<style>
h1 {
  font-weight: bold;
}
</style>
    `,
    code2html:`<html>
  <head>
    <title>Vue.js component</title>
    <script type="text/javascript" src="js/vue.js"><script>
  </head>

  <body>
    <h2>Vue component</h2>
    <div id="vue_main">
      <basic-component></basic-component>
    </div>
  </body>
  <script type="text/javascript" src="js/component.js"><script>

</html>`,
    code2js:`Vue.component('basic-component', {
  template: '<h1>Hello from Vue.js component</h1>',
});

var vm = new Vue({
  el: '#vue_main'
});
`,

    };
  },
});
</script>
 
<style>
</style>
