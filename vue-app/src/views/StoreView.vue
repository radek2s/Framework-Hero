<template>
  <div>
    <h1>Vuex - Vue.js Store concept</h1>
    <p>
      This will be more advanced topic for the Web-Developer. Vuex is a 
      state management pattern for Vue.js applications. This pattern is 
      build around the concept of "one-way data flow" where View components
      get data from the Store and update the state by dispatching specific actions
      that mutate the Store state. In this pattern the "state" is the single source
      of truth that handles all the data. View components can map the state 
      to the local variables and display the data. This is a very powerful
      pattern where we need to change the value in one place and the change
      will be reflected in all the other places.
    </p>

    <p>
      OK. But why? Well, the answer is simple. If our application is growing
      larger and larger, and the components relationships are becoming more
      complex, we need to make sure that the valid data is being shared between
      the components. This is where Vuex comes in. We don't need to worry about
      the passing props and synchronizing the data between the components.
      Vuex store can be treated as a global singleton that holds the state of
      whole application. Dan Abramov, the author of Redux said that: "Flux libraries 
      are like glasses: you’ll know when you need them."
    </p>

    <h2>Store state and mutations</h2>

    <p>
      Basic purpose of the store is to hold the state of the application. To do this we need to
      install the Vuex library and then we can create a new store instance.
    </p>

    <label>Store.js</label>
    <highlightjs language="javascript" :code="code0"></highlightjs>

    <p>
      The Vuex object must be attached to the global Vue instance. Base on that we can 
      access the store from any Vue component by using the <code>this.$store</code> property. 
      The dollar sign is a convention to access the property of the global Vue instance.
    </p>

    <p>
      As we know the Vue.js framework must have the initial point where the application is attached.
      So somewhere in the <code>main.js</code> file we can create this store instance or import it from
      the separate file. There we should place this <code>Vue.use()</code> method. 
    </p>

    <p>
      Ok. Now we have our Vuex store object. We have defined there a <code>state</code> property 
      which will be responsible for holding the state of the application. By default the Vuex 
      Store use reactive data structures. This means that the value of an object is
      automatically updated when the state changes. This is the reason why we can't change the 
      state directly. To change it we need to commit and mutation that will perform some operation
      on the state. 
    </p>

    <p>
      In our case we have the <code>items</code> array that holds the list of items in our shopping cart.
      Only way how we can update this array is using the <code>addItem()</code> mutation. To do that we 
      must use our store reference and call the <code>commit()</code> method. As the first argument we
      must pass the name of the mutation. The second argument is the payload that will be passed into it. 
      The example below shows how to add an book item to the shopping cart.
    </p>


    <label>BookItem.vue</label>
    <highlightjs language="vue" :code="code0a"></highlightjs>

    <p>
      Well, we added a new item to the shopping cart but we need to know what is inside our basket.
      That will be very easy because as I said before the Store object is assigned to the global Vue
      instance so we can access it from any Vue component. Using the <code>this.$store.state</code> property
      we can access the state of the store and then we can access the <code>items</code> array. So we can
      get the list of items in the shopping cart using this <code>this.$store.state.items</code> code.
    </p>

    <p>
      Nice, but still not perfect. Sometimes we will have a nested object that we need to access and 
      to solve this problem we can use the <code>computed</code> property of the Vue component. Using it
      we can simplify the code and make it more readable. What is more we can modify the items array 
      before we use it by adding some additional logic to the <code>computed</code> property. But this
      time we will only create a <code>basket</code> computed property that will return the list of items
      that are in the shopping cart.
    </p>

    <label>Basket.vue</label>
    <highlightjs language="vue" :code="code0b"></highlightjs>

    <h2>Getters</h2>

    <p>
      We have already seen how to access the specific state of the store. But sometimes we need more
      specific information for our components. For example if we do not have any items in the shopping cart
      we should not display the "Checkout" button. But on the other hand we want know how many items are
      currently in our basket. To solve that issue we can use the <code>getters</code> property of the Vuex.
    </p>

    <label>Store.js</label>
    <highlightjs language="vue" :code="code1"></highlightjs>

    <p>
      We can treat the <code>getters</code> property as the computed property of the Vue component 
      but for the whole store. To access the getters we need to use the <code>this.$store.getters</code>
      property and this is an object where each getter is a separate property. So finally we can access
      to the count of the items in the shopping cart using the <code>this.$store.getters.itemsCount</code>
      statement.
    </p>

    <p>
      Ok but what if we want to filter the items in the shopping cart without modifying the state?
      We can create a parametrized getter that can receive an argument and return the filtered list.
    </p>

    <label>Store.js</label>
    <highlightjs language="vue" :code="code1a"></highlightjs>

    <label>Basket.vue</label>
    <highlightjs language="vue" :code="code1b"></highlightjs>

    <h2>Actions</h2>

    <p>
      Last but not least is the <code>actions</code> property. Ok but what is the difference between
      between the <code>mutations</code> and <code>actions</code>? The <code>mutations</code> are
      used to change the state of the store. The <code>actions</code> are used to perform some
      asynchronous operation. For example we can add an item to the shopping cart using the <code>addItem()</code>
      mutation. But if we want to make an order we will need to make an asynchronous request to the server.
      And in this case we need to use the <code>makeOrder()</code> action.
    </p>

    <label>Store.js</label>
    <highlightjs language="vue" :code="code2"></highlightjs>

    <p>
      Actions very often commit mutations. Like in this example above. But how we can use this 
      action in our client code? We need to invoke the <code>this.$store.dispatch()</code> method
      and pass the name of the action as the first argument. Again the second argument is the payload that
      will be passed into the action if it is needed.  Action handlers receive a context object 
      which exposes store instance methods so you can access the state and getters using 
      <code>context.state</code> or <code>context.getters</code> statements.
    </p>


    <label>Basket.vue</label>
    <highlightjs language="vue" :code="code2a"></highlightjs>


    <p>
      The main flaw of this "commits" and "dispatches" approach is that we can only pass one argument
      as a payload, so if we want to pass more arguments we need send an object with valid properties.
    </p>

    <h2>Modules</h2>

    <p>
      Vuex may growing with our application in time and the store can get really bloated. 
      So we can split the store into smaller modules where each module will have its own 
      state, mutations, getters and actions. In this way we can invoke the inner module state 
      inside actions by using the same <code>context.state</code> statement. Additionally 
      in this actions we can access to the root module state using the <code>context.rootState</code>.
      You can also notice that the sub-module do not need this <code>new Vuex.Store()</code>
      initialization.
    </p>

    <label>OrderStore.js</label>
    <highlightjs language="javascript" :code="code3"></highlightjs>

    <label>Store.js</label>
    <highlightjs language="javascript" :code="code3a"></highlightjs>

    <p>
      This was the general concept of the Vuex state management. The more detailed explanation
      can be found in the <a href="https://vuex.vuejs.org/#what-is-a-state-management-pattern">official documentation</a>.
    </p>

    <!-- modules -->

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DirectivesView",

  data() {
    return {
      code0: `import Vue from 'vue' 
import Vuex from 'vuex'

//attach Vuex library to global Vue instance
Vue.use(Vuex) 

const store = new Vuex.Store({
  state: {
    items: [],
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    }
  },
})`, code0a: `...
methods: {
  addBook() {
    this.$store.commit('addItem', new Book())
  }
}
`, code0b: `...
computed: {
  basket() {
    return this.$store.state.items;
  }
}
`,
code1: `...
const store = new Vuex.Store({
  ...

  getters: {
    itemsCount: (state) => {
      return state.items.length;
    }
  }
})`,

code1a: `...
const store = new Vuex.Store({
  ...

  getters: {
    priceFilter: (state) => (price) =>{
      return state.items.filter(item => item.price > price);
    }
  }
})`,

code1b: `...
data() {
  return {
    minPrice: 20
  }
},
computed: {
  filteredItems() {
    return this.$store.getters.priceFilter(this.minPrice);
  }
}
`,
code2: `...
const store = new Vuex.Store({
  ...

  actions: {
    makeOrder(context) {
      Axios.post('/api/order', context.state.items).then(() => {
        context.commit('clearItems');
      }).catch(() => {
        alert('Failed to make an order');
      });
    }
  }
})`,
code2a: `...

methods: {
  makeOrder() {
    this.$store.dispatch('makeOrder');
  }
}
`,
code3: `...
const orderStore = {
  ...

  actions: {
    makeSubOrder(context) {
      console.log(context.rootState.items);
      context.commit('clearItems');
    }
  }
}`,
code3a: `...
const store = new Vuex.Store({
  ...

  modules: {
    order: orderStore
  }

})`,
     
    };
  },
});
</script>
 
<style>
</style>