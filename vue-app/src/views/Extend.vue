<template>
  <div>
    <h1>Extending the component</h1>
    <p>
      In Vue.js there are multiple ways how to extend components. For Vue.js
      that is possible but it is not commonly used aproach. We should try to
      follow the rule "Composition over Inheritance" where we try to use our
      components as a composition of other components. But this approach is not
      always possible or not always suits our needs. We may need to create a
      Mixin or other more advanced pattenrs to our code. But let me start from
      the strach.
    </p>

    <h2>Component Inheritance</h2>

    <p>
      Like in Angular we can use inheritance mechanism to create a new child
      component that share some logic from the parent component. This approach
      has some pros and cons and we should be aware of them while we are
      designing our application. Components in Vue.js are some kind of class
      components so we can think of them as classes that can be inheritated.
      Inheritance approach may add some complexity to code so think twice before
      you decide to use this pattern instead the simpler ones like using
      "Slots", "Props-driven teplate" or "JavaScript utility functions".
    </p>

    <label>WeatherBase.vue</label>
    <highlightjs language="vue" :code="code0"></highlightjs>

    <p>
      At the beginning we have a base component that contain the Weather data.
      The base component have defined basic template that can be but doesnt have
      to be overriden. The next step is to create a child component that will
      inherit the base component.
    </p>

    <p>
      (Yeah I know that there should be an logic that will be responsible for
      fetching the data from the server but the point is that the base component
      has some logic that is common for all the child components.)
    </p>

    <label>WeatherSummary.vue</label>
    <highlightjs language="vue" :code="code1"></highlightjs>

    <label>WeatherDetails.vue</label>
    <highlightjs language="vue" :code="code2"></highlightjs>

    <p>
      Using the <b>extends</b> property in child component we can inherit the
      WeatherBase component. The child class will have all properties of the
      parent component. If we define in child a property that exists in the
      parent class it will be overwritten. What is more if we do not define a
      <code>template</code> tag in the child component it will inherit the
      parent template.
    </p>

    <h2>Mixins</h2>

    <p>
      Other way to extend the component is to use the <b>Mixins</b> property.
      Mixin pattern helps to organize features and spread them into a separate
      objects. This approach lets us control which logic we want to share and
      reuse between components. Mixin is merged into the specific component so
      we can say that all options inside the mixin are "mixed" into the
      component. This pattern may be useful if we work with a simple scenario
      but for more complex project we have to be aware of naming collisions and
      other downsides of the mixins. Sometiems (especially for component that
      use more than one mixin) it will be hard to understand what a component
      does or how it works.
    </p>

    <label>notification.js</label>
    <highlightjs language="javascript" :code="code3"></highlightjs>

    <p>
      This notification mixin is responsible for showing the notification. We
      can imagine that many components can use this mixin to share the
      notification logic. So to use it we just need to import that mixin and add
      it to the component property <b>mixins</b>.
    </p>

    <label>Player.vue</label>
    <highlightjs language="vue" :code="code3vue"></highlightjs>

    <p>
      Now this "Player component" will have all the functionality of the
      "notification" mixin. We have to remember that the mixin is merged into
      the component so if we change the properties of the mixin it will change
      only for this component.
    </p>

    <p>
      Sometimes we will have situation when the mixin contain the overlapping
      options. By default Vue.js will merge the options in the order of the
      mixins using appropriate strategies. Options that expect object values,
      for example methods, components and directives, will be merged into the
      same object. But Hook functions with the same name will be merged into an
      array so all of them will be called. Keep in mind that mixin hooks will be
      called before the component's hooks. There are also some other strategies
      that can be used to merge the options but more details can be found in the
      <a href="https://vuejs.org/v2/guide/mixins.html">official documentation</a
      >.
    </p>

    <h2>High Order Components (HOC)</h2>

    <p>
      Last concept that can help us to exdent the component is a architectural pattern called 
      High Order Components (HOC). It was borrowed from the React where this pattern is very 
      popular. Main purpouse is to enhance a component's functionality by wrapping it into 
      a function to return another component. This pattern is more complex than the other two
      but can provide a lot of possibilities and keep the code clean and scalabe. It add 
      an additional wrapper component to our code but it sill will be more organized than
      the prevoius ones.
    </p>

    <label>HoComponent.js</label>
    <highlightjs language="javascript" :code="code4"></highlightjs>

    <p>
      This is the HoComponent.js file. It is a function that takes a component and 
      adds some functionality to it. This new component will contain additional 
      property that will be used to enhance the original component. To find 
      more about HOC you can read some of the articles on the web. One of the 
      expample on which I based on was from <a href="https://pusher.com/tutorials/higher-order-components-vue/">Pusher.com</a>.
    </p>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Extend",

  data() {
    return {
      code0: `<template>
    <div>
        <h1>Weather widget</h1>
    </div>
</template>
<script>
export default {
  name: "WeatherBase",
  data() {
      return {
          weather: {
              day: 'Monday',
              forecast: 'Snow',
              temperature: '13°C',
              wind: 'N',
              windSpeed: '50km/h',
              humidity: '50%'
          }
      }
  }
};
<script>
<style>
</style>
`,
      code1: `<template>
    <div>
        <span>{{weather.day}}</span>
    <div>
        <span>{{weather.forecast}}</span>
        <span>{{weather.temperature}}</span>
    </div>
</div>
</template>
<script>
import WeatherBase from './WeatherBase.vue';

export default {
  name: "WeatherDetails",
  extends: WeatherBase,
};
<script>
<style>
</style>
`,
      code2: `<template>
<div>
    <span>{{weather.day}}</span>
    <div>
        <span>{{weather.forecast}}</span>
        <span>{{weather.temperature}}</span>
        <span>{{weather.wind}} {{weather.windSpeed}}</span>
        <span>{{weather.humidity}}</span>
    </div>
</div>
</template>
<script>
import WeatherBase from './WeatherBase.vue';

export default {
  name: "WeatherSummary",
  extends: WeatherBase,
};
<script>
<style>
</style>
`,
      code3: `export default {
  data() {
    return {
      notificationVisible: false,
    }
  },
  methods: {
    showNotification() {
      this.notificationVisible = true;
    },
    hideNotification() {
      this.notificationVisible = false;
    },
  },
}`,
      code3vue: `<template>
<div>
  <button @click="showNotification">Show notification</button>
</div>
</template>
<script>
import notificationMixin from './notification.js';

export default {
  name: "Player",
  mixins: [notificationMixin],
  ...
}
<script>
<style>
</style>`,
  code4: `const HoC = (component, additionalMethod) => {
  return Vue.component("HoC", {
    render(createElement, context) {
      return createElement(component, {
        props: {
          returnedData: this.returnedData
        }
      });
    },
    data() {
      return {
        returnedData: additionalMethod()
      };
    }
  });
};
export default HoC;`,
    };
  },
});
</script>
 
<style>
</style>