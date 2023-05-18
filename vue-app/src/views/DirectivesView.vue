<template>
  <div>
    <h1>Directives in Vue.js</h1>
    <p>
      In Vue.js like in Angular we can use some build-in directives that can add
      some additional behavior to our components. Unlike in Angular
      documentation in Vue directives are not directly named and divided to
      specific structural or attribute directives. But nothing stands in the way
      of using them. Directives are special attributes with the
      <code>v-</code> prefix that expect a single JavaScript expression as a
      value. If that value changes the Vue.js engine will apply the changes to
      the element regarding the directive. One of the most common directive in
      Vue is <code>v-bind</code> that is used to bind any data or property to
      the element because mustaches cannot be used inside HTML attributes. The
      second one that we have seen is the <code>v-on</code> directive that is
      used to listening the DOM events.
    </p>

    <h2>Build-in attribute directives</h2>

    <p>
      Using that concept we can bind any data to specific elements to manipulate
      them. Very often we need to manipulate the element class list or its
      inline styles so to do that in Vue.js we can attach the
      <code>v-bind</code> directive to the proper attribute. In our expression
      we only need to generate the final string value that we want to bind to
      the element.
    </p>

    <h3>v-bind:class</h3>
    <p>
      Attaching the v-bind directive to the class attribute will inform the
      Vue.js that we want to bind the class attribute to the result of our
      expression. In that way we can add or remove CSS classes to the element
      dynamically. If expression returns a <code>true</code>
      the class will be added to the element, otherwise it will be removed.
    </p>

    <label>directive.vue</label>
    <highlightjs language="vue" :code="code0"></highlightjs>

    <p>
      In that case we attached the v-bind directive to the class attribute of
      the div element. This directive will receive a object with the CSS classes
      that we want to add or remove depending on the state of our component. The
      'selected' class will be added always because the expression is always
      true, but the 'disabled' class will be added only if the
      <code>isAdmin()</code> method returns false.
    </p>

    <p>
      We can also combine that directive with simple class attribute. Using this
      approach we can add static CSS classes to the element and extend it with
      dynamic classes that will be based on the component state.
    </p>

    <label>Login.vue</label>
    <highlightjs language="vue" :code="code1"></highlightjs>

    <p>
      In this example we can see that the <code>div</code> element will always
      have the <code>card</code> and <code>card--title</code> classes. But if
      the <code>isValid</code> property is <code>false</code> this directive
      will add the <code>card--error</code> class to this HTML element. This
      time we used the array syntax instead of object to define the classes. If
      we do it in this way we can also bind the CSS classes result to the data
      property of the component. Very often to write a clean code we can combine
      that directive with "computed" property where all the logic is placed and
      returns a string class name.
    </p>

    <h3>v-bind:style</h3>

    <p>
      The same syntax works for the style attribute. This one is responsible for
      manipulating the inline styles based on the provided expression.
    </p>

    <label>InputLabel.vue</label>
    <highlightjs language="vue" :code="code2"></highlightjs>

    <p>
      In this example depending on the provided properties we can change the
      style of the input label. If we pass the <code>required</code> property
      the "Label text" will be bolded. In <code>inputStyles</code> object we
      manipulate the CSS selectors and base on the state of the component we can
      change them to specific value. Easy and understandable. Isn't it?
    </p>

    <h3>Attribute directives shorthand</h3>

    <p>
      The <code>v-</code> prefix is a identification for Vue.js attributes that
      are in the template. But sometimes we work on the project where every
      template is managed by Vue so we can reduce the amount of code by using
      the shorthand.
    </p>

    <ul>
      <li>
        <code>v-bind:href</code> => <code>:href</code> - we reduce the whole
        v-bind closure
      </li>
      <li>
        <code>v-on:click</code> => <code>@click</code>- we replace that
        directive with a "@" symbol
      </li>
    </ul>

    <h2>Build-in structural directives</h2>

    <p>
      In Vue.js we can conditionally render a specific HTML elements depenging
      on the result of the structural directive expression. This directives can
      modify the DOM structure by adding or removing elements.
    </p>

    <h3>v-if</h3>

    <p>
      The v-if directive is used to conditionally render or not a specific HTML
      block. If the condition expression returns a truthy value the specific
      code block will be rendered. Otherwise the block will be removed.
      This directive is a nice guard against the null value. For example if we want to 
        display the name property of the user object we can use the <code>v-if</code> to check 
        if the user object is not null. 
    </p>

    

    <label>Basket.vue</label>
    <highlightjs language="vue" :code="code3"></highlightjs>

    <p>
        Here we can see that the amount of items in basket is displayed only when there is more than 0 items.
    </p>

    <p>
        The v-if directive can be extended with the <code>v-else</code> directive that will be rendered
        when the condition of previous v-if is false. This is useful when we want to present a loading 
        indicator when the data is being fetched and when the data is ready we want to render the component.
    </p>

    <label>Basket.vue</label>
    <highlightjs language="vue" :code="code3a"></highlightjs>

    <h3>v-show</h3>

    <p>
        v-if directive is used to conditionally render an HTML element. But sometimes we just want 
        to show or hide that element. In that case we can use the <code>v-show</code> directive.
        The v-show directive change the CSS display property, when from the other side the 
        v-if directive decide about rendering that code block or not. This slight difference 
        may affect the performance of the application because when we are using v-show everything
        inside that tag will be rendered but won't be visible. So it does not protect us from
        the null value. 
    </p>

    <h3>v-for</h3>

    <p>
        Finally the <code>v-for</code> directive. It is responsible for iterating over the array of 
        objects. It will present the list of items based on the host HTML block. This host block 
        will be the definition how Vue.js should present that list. This directive requires a 
        string instruction that define the single item from the specified array. Like in this 
        example <code>v-for="let item of items"</code>. We create a variable item from the items array.
    </p>

    <label>Orders.vue</label>
    <highlightjs language="vue" :code="code4"></highlightjs>

    <p>
        In this case we want to present the list of orders and each order will be represented by a 
        <code>div</code> element that innerText will be the name property of the order.
    </p>
    <p>
        The <code>v-for</code> directive context may return the zero-based index of the item in 
        each iteration. So we can get the index of the item variable that we used in the template. 
        To do that we can extract the second argument form the array and then use it as a variable.
    </p>

    <label>Orders.vue</label>
    <highlightjs language="vue" :code="code4a"></highlightjs>

    <p>
        Sometimes we want to render a dynamic list of items that can be changed when the component 
        receives new data. In this case every change in the data array will cause the whole list to 
        be re-rendered. To prevent this we can use the key property that is responsible for tracking 
        changes in the data array. To do that we only have to bind that attribute with proper value.
        In this case we want to use the id of the item as a key.
    </p>

    <label>Orders.vue</label>
    <highlightjs language="vue" :code="code4b"></highlightjs>

    <h2>Custom directives</h2>

    <p>
        Vue allows us to create our own directives. That can be useful when we want 
        create reusable code that realize specific functionality. This concept is 
        well described in the <a href="https://vuejs.org/v2/guide/custom-directive.html">official documentation</a>.
    </p>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DirectivesView",

  data() {
    return {
      code0: `<div v-bind:class="{'selected': true, 'disabled': !isAdmin()}">
      Hello User!
</div>
`,
      code1: `<div class="card card--title" v-bind:class="[isValid ? '' : 'card--error']">
      <h2>Login form</h2>
</div>
`,
      code2: `<template>
  <span v-bind:style="inputStyles">Label text</span>
</template>
<script>
export default {
    props: ['required', 'disabled'],
    data() {
        return {
            inputStyles: {
                fontWeight: this.required ? 'bold' : 'normal',
                color: this.disabled ? '#999' : '#000',
            };
        }
    }
}
<script>
`,
      code3: `<span v-if="basketItems > 0"> You have {{basketItem}} items in your basket.</span>`,

      code3a: `<span v-if="basketItems > 0">
  You have {{basketItem}} items in your basket.
</span>
<span v-else>
  Your basket is empty.
</span>`,
code4: `<div v-for="let item in basketProducts">{{item.name}}</div>`,
code4a: `<div v-for="let (item, i) in basketProducts">
  {{i+1}}: {{item.name}}
</div>`,
code4b: `<div v-for="let (item, i) in basketProducts :key=item.id">
  {{i+1}}: {{item.name}}
</div>`,
    };
  },
});
</script>
 
<style>
</style>