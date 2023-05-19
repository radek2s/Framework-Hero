<template>
  <div>
    <h1>Content projection</h1>

    <p>
        To build a powerful application that is flexible and extensible, we should 
        provide some outlets for content. Using the <code>slot</code> tag, we can 
        pass not only the properties but also the HTML content to specific the components.
        That pattern enable us to build a flexible application with more reusable components.
    </p>

    <h2>
        Single-slot
    </h2>

    <p>
        To serve content into specific component we have to define the <code>slot</code> tag 
        somewhere in the component template. That content distribution api allows us to 
        compose components in more spohisticatd way. Defining a <code>slot</code> tag inside Child 
        inorm Vue where it should place the content of data provided by parent component. 
        The example below shows how to use that selector to render data from the parent component. The 
        content will be rendered below header selector and above the footer. Each child component 
        will be rendered in the same way. So that means that all child components will have a title 
        and a footer but their "body" will be different depending on the data provided by parent.
        Now everthing within <code>child</code> tag will be rendered inside Child component
        inside the <code>slot</code> tag.
    </p>
 
    <label>Child.vue</label>
    <highlightjs language="vue" :code="code0child"></highlightjs>

    <label>Parent.vue</label>
    <highlightjs language="vue" :code="code0parent"></highlightjs>

    <p>
        Taht content distribution pattern is a powerful tool to build flexible and extensible
        components. This could be used to build a common component that will be displaying 
        different content on the dashboard. This could be also a template for a blog post and so on.
    </p>

    <h2>
        Multiple-slots
    </h2>

    <p>
        Sometimes to compose components we will need more than one slot. It could be easly resolved
        by adding a <code>name</code> attribute to the <code>slot</code> tag. The name attribute
        creates a unique named outlet for the component. If we do not provide that attribute to 
        the slot tag by default it will have "default" name. To use that named outlet we have to
        use the <code>template</code> tag with additional directive <code>v-slot:name</code> where
        name is the name of the slot in child component.
    </p>

    <label>Child.vue</label>
    <highlightjs language="vue" :code="code1child"></highlightjs>

    <label>Parent.vue</label>
    <highlightjs language="vue" :code="code1parent"></highlightjs>

    
    


    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Slots",

  data() {
    return {
      code0child: `<template>
    <div>
        <h1>Header of child</h1>
        <slot></slot>
        <footer>Footer of child</footer>
    </div>
</template>
<script>
export default { }
<script>`,
    code0parent: `<template>
    <div>
        <child>
            <section>
                <h2>Parent section to be displayed</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>
        </child>
    </div>
</template>
<script>
import Child from "./Child.vue";
export default {
    components: {
        Child
    },
}
<script>`,
    code1child: `<template>
    <div>
        <slot name="header"></slot>
        <slot></slot>
        <footer>Footer of child</footer>
    </div>
</template>
<script>
export default { }
<script>`,
    code1parent: `<template>
    <div>
        <child>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <template v-slot:header>
                <h2>Parent section to be displayed</h2>
            </template>
        </child>
    </div>
</template>
<script>
import Child from "./Child.vue";
export default {
    components: {
        Child
    },
}
<script>`,
    };
  },
});
</script>
 
<style>
</style>
