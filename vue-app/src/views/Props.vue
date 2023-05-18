<template>
  <div>
    <h1>Component data, methods and properties</h1>

    <p>
        All data within a Vue.js component use reactive data structures.
        Values and DOM element are linked into the Obervable variables due 
        to that while we will be updatating the value of the variable, we 
        will also be updating the DOM element accordingly.
    </p>

    <h2>Component internal data</h2>

    <p>
        Vue component could be treated as an kind of object that has properties
        and methods. When in Json object notation we create a property we  use
        ":" (colon) to separate the property name from the value. The similar 
        approach is used in Vue.js components. There are a few properties that 
        are responsible for the component's behavior. One of them is the <code>data</code>
        method. This is responsible for storing the component's data.
        It should be an function that returns an other objects like in the basic example below.
    </p>
 
    <label>index.html</label>
    <highlightjs language="html" :code="code0html"></highlightjs>

    <label>main.js</label>
    <highlightjs language="javascript" :code="code0js"></highlightjs>

    <p>
      Now using interpolation experssion in HTML template we can access the data stored in the component's data
      and replace that <code>welcomeMessage</code> with the value of that variable. When we use 
      <code>{{"\{\{ \}\}"}}</code> (double curly braces) we are using interpolation expression.
      Specific values are initialized inside that <code>data</code> method and what is important
      is that that all that variables are an instances of Obervable class.
    </p>

    <p>
        That vue.js object has its own lifecycle hooks methods. That allows user to 
        initialize the component's data later when the component is created or mounted.
        One of them is the <code>mounted()</code> hook. This is called when the component is attached to
        the page and rendered the template. More about that is available on the <a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram">Vue.js documentation</a>.
    </p>

    <h2>Passing properties</h2>

    <p>
        How to build a application without component interaction? Fortunately Vue.js provides 
        a way to pass properties to the component. Very similar to the way we define data inside
        component we are defining a properties that are passed to the component. To do that we 
        will use <code>props: [...]</code> property. In a basic example it is a property that 
        has an array of strings. Each of those strings is a property name that could be passed into the 
        component. But there is also a way to define a properties as an object. In that case we have 
        to define the property name as a key and the type of that property as a value.
    </p>

    <label>Props.vue</label>
    <highlightjs language="vue" :code="code1vue"></highlightjs>

    <p>
        Because attributes names in HTML are case-insensitive it doesn't matter if we use
        in our template camleCased prop names or kebab-cased equivalents. Browser will recognize
        then and render the correct value.
    </p>

    <label>Parent.vue</label>
    <highlightjs language="vue" :code="code1parent"></highlightjs>

    <p>
        While using the approach with Single File Components we can import and export the components.
        To use a child component in the parent we have to import it from the origin place and add register
        that component in the <code>components: {...}</code> property of Parent. Now we can use this 
        props to pass the string value to the child component.
    </p>

    <h3>
        Passing Variables
    </h3>

    <p>
        Regarding passing a Static variables we can pass a value that could be any type of data.
        To inform the Vue instance that we want to pass a variable as a value of property we have to use the <code>v-bind</code>
        directive. Directives are powerful special attributes provided by Vue.js that allow us perform 
        reactive behavior on the DOM. Every Vue.js directive is prefixed with <code>v-</code>.
        In the example below we are passing a variable as a value of property using <code>v-bind:welcomeMessage</code>.
    </p>

    <label>Parent.vue</label>
    <highlightjs language="vue" :code="code2parent"></highlightjs>

    <p>
        Some of the Vue.js directives has a shorthand version. In that case we can use just<code>:</code>
        (colon) to indicate that we want to pass a variable as a value of property (<code>:welcomeMessage</code>, 
        so we reduced the <code>v-bind</code> text). We have to remember that we should not change 
        the recived value from parent inside the child component. 

    </p>

     <h2>
        Emmiting Events
    </h2>

    <p>
        Communication from child to parent is much easier than providing a props into the component.
        That works on the same principle like in many other frameworks. We can emit an event from the child
        to the parent that could handle that action. To emit a such event we neet to use 
        the <code>$emit()</code> method from core Vue.js instance. As the argument we pass the name of the event
        and the data that will be transfered. Now only the parent have to listen for that event and handle it.
        To do that we have to use the <code>v-on</code> directive on a specific event name for that component.
        For that directive there is also a shorthand version so v-on: can be replaced by <code>@</code> (at) sign.
    </p>

    <label>SingleEmit.vue</label>
    <highlightjs language="vue" :code="code3child"></highlightjs>

    <p>
        The thing that we can see is the new property for our Vue.js component. It is the 
        <code>methods</code> property. This property is an object that contains all the methods that
        could be used by the component. In child component we have a method called <code>increaseNumber()</code>
        that is responsible for increasing the value of counter inside the child component and the 
        result is emitted to the parent component as an <b>'increased-event'</b> event.
    </p>

    <label>Parent.vue</label>
    <highlightjs language="vue" :code="code3parent"></highlightjs>

    <p>
        Parent component is listening for the event and when it is emitted it will call the method
        <code>onIncreased()</code> that receives the data that was emitted. Recived value is saved 
        to the <code>counter</code> variable inside the parent component and when it is updated 
        the HTML code is immediately updated.
    </p>


    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Props",

  data() {
    return {
      code0html: `<html>
    <head>
        <title>Vue.js props</title>
        <script type="text/javascript" src="js/vue.js"><script>
    </head>

    <body>
    <div id="app">
        <h1>Hello from {{welcomeMessage}}</h1>
    </div>
    <script type="text/javascript" src="js/main.js"><script>
</body>`,
    code0js: `var app = new Vue({
    el: '#app',
    data() {
        return {
            welcomeMessage: 'Vue.js property!',
        }
    },
})`,
    code1vue: `<template>
    <h1>Hello from {{welcomeMessage}}</h1>
</template>
<script>
export default {
    props: ['welcomeMessage'],
}
<script>
<style>
</style>
`,
    code1parent: `<template>
    <props welcome-message="Vue.js child component"></props>
</template>
<script>
import Props from "./Props.vue";
export default {
    components: {
        Props,
    },
}
<script>
`,
    code2parent: `<template>
    <props v-bind:welcomeMessage="framework"></props>
</template>
<script>
import Props from "./Props.vue";
export default {
    components: {
        Props,
    },
    data() {
        return {
            framework: 'Vue.js',
        }
    }
}
<script>
`,
    code3child: `<template>
    <button @click="increaseNumber()">Increase number</button>
</template>
<script>
export default {
    data() {
        return {
            currentValue: 0,
        }
    },
    methods: {
        increaseNumber() {
            this.currentValue++;
            this.$emit('increased-event', this.currentValue);
        },
    },
}
<script>
<style>
</style>
`, code3parent: `<template>
<div>
    <p>Clicked: {{counter}} times.</p>
    <single-emit v-on:increased-event="onIncreased"></single-emit>
</div>
</template>
<script>
import SingleEmit from "./SingleEmit.vue";
export default {
    components: {
        SingleEmit,
    },
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        onIncreased(value) {
            this.counter = value;
        },
    },
}
<script>
<style>
</style>
`,
    };
  },
});
</script>
 
<style>
</style>
