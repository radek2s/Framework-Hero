(function(e){function t(t){for(var o,c,l=t[0],r=t[1],s=t[2],p=0,u=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&u.push(a[c][0]),a[c]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);d&&d(t);while(u.length)u.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var r=n[l];0!==a[r]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=r;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"09ab":function(e,t,n){"use strict";n("a714")},"16ee":function(e,t,n){"use strict";n("d9bf")},a13a:function(e,t,n){},a714:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a=Object(o["f"])("footer",null,null,-1);function i(e,t,n,i,c,l){var r=Object(o["u"])("Navbar"),s=Object(o["u"])("Topbar"),d=Object(o["u"])("router-view");return Object(o["o"])(),Object(o["c"])("div",null,[Object(o["f"])(r),Object(o["f"])("header",null,[Object(o["f"])(s)]),Object(o["f"])("main",null,[Object(o["f"])("section",null,[Object(o["f"])(d)])]),a])}var c=Object(o["y"])("data-v-197650de");Object(o["r"])("data-v-197650de");var l=Object(o["e"])("Home"),r=Object(o["e"])("Project initialization"),s=Object(o["e"])("Compnent Example"),d=Object(o["e"])("Compnent Parameters"),p=Object(o["e"])("Compnent Projection"),u=Object(o["e"])("Service");Object(o["p"])();var h=c((function(e,t,n,a,i,h){var m=Object(o["u"])("router-link");return Object(o["o"])(),Object(o["c"])("nav",null,[Object(o["f"])("div",null,[Object(o["f"])("ul",null,[Object(o["f"])("li",null,[Object(o["f"])(m,{to:"/"},{default:c((function(){return[l]})),_:1})]),Object(o["f"])("li",null,[Object(o["f"])(m,{to:"/project-initialization"},{default:c((function(){return[r]})),_:1})]),Object(o["f"])("li",null,[Object(o["f"])(m,{to:"/simple-component"},{default:c((function(){return[s]})),_:1})]),Object(o["f"])("li",null,[Object(o["f"])(m,{to:"/props-component"},{default:c((function(){return[d]})),_:1})]),Object(o["f"])("li",null,[Object(o["f"])(m,{to:"/slots-component"},{default:c((function(){return[p]})),_:1})]),Object(o["f"])("li",null,[Object(o["f"])(m,{to:"/services-component"},{default:c((function(){return[u]})),_:1})])])])])})),m=Object(o["g"])({name:"Navbar"}),b=(n("09ab"),n("d959")),f=n.n(b);const v=f()(m,[["render",h],["__scopeId","data-v-197650de"]]);var j=v,g=Object(o["y"])("data-v-38afbf9e");Object(o["r"])("data-v-38afbf9e");var w={class:"topbar"},O=Object(o["f"])("h1",null,"Vue.js Page",-1);Object(o["p"])();var y=g((function(e,t,n,a,i,c){return Object(o["o"])(),Object(o["c"])("div",w,[O])})),V=Object(o["g"])({name:"Topbar"});n("16ee");const T=f()(V,[["render",y],["__scopeId","data-v-38afbf9e"]]);var x=T,C=Object(o["g"])({name:"FrameworkHero",components:{Navbar:j,Topbar:x}});n("ffd8");const S=f()(C,[["render",i]]);var k=S,I=n("6c02"),P=Object(o["f"])("h1",null,"Some words about Vue.js",-1),M=Object(o["f"])("p",null," Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications. Author of Vue.js is Evan You that is also the main maintainer. It was released in February 2014 so that is the youngest framework from the comparing ones. One of the most popular versions of Vue.js in 2021 is Vue.js 2.0 but in 2020 Vue.js 3.0 has been released and many developers are moving to it. ",-1),L=Object(o["f"])("p",null," Main goal of Vue.js is to make it easy to create user interfaces by incrementally adding features. It provides very adaptable architecture and it is easy to extend it by composiong the components. Components are a way to build reusable, encapsulated, and composable elements of a web application. Components generally gets an input, and changes behavior depending on that changes. Internal methods are used to change the state of the component that can be observed for example as a change in the DOM. Main library of Vue.js is responsible only for the view layer but it has a lot of officially supported libraries and packages. It is like the React, every dependency must be installed separately. So to provide a routing within the application, developer must install external library called Vue Router. It also extending the HTML pages so to build an project with Vue.js it is necessary to install Vue CLI. ",-1);function _(e,t,n,a,i,c){return Object(o["o"])(),Object(o["c"])("div",null,[P,M,L])}var H=Object(o["g"])({name:"Home"});const F=f()(H,[["render",_]]);var q=F,E=Object(o["d"])('<h1>Project initialization</h1><p> Vue.js is a standalone library that contains the core elements required to start building the user interface directly from the HTML page. There is another project called <code>@vue/cli</code> that provides a full system that alow developert rapidly build and deploy applications. It ensure various build tools that can be easily tweaked to match the needs of programmer. The CLI (Command Line Interface) is a tool that allows you to run commands to create a new project or to run the development server. </p><h2>Installing the Vue.js CLI</h2><p> Vue CLI requires <a href="https://nodejs.org/en/">Node.js</a> with version 8.9 or above. Installing the CLI is as simple as running the following command: </p><code>npm install -g @vue/cli</code><p> That will install Vue CLI globaly to the Operating System. To verify if it has been installed correctly, run the following command: <code>vue --version</code></p><h2>Project generation</h2><p> When the tool has been installed now you can create a new project by running the following command: </p><code>vue create framework-hero</code><p> Now the project creator will be asking user to decide how the project should looks like and what dependencies it should use. </p><h2>Running the development server</h2><p> Finally when we have project created we can run the development server to instant prototyping the application. In the main project folder we can run the following command: </p><code>vue serve --open</code>',13);function D(e,t,n,a,i,c){return Object(o["o"])(),Object(o["c"])("div",null,[E])}var N=Object(o["g"])({name:"Project"});const W=f()(N,[["render",D]]);var J=W,z=Object(o["f"])("h1",null,"Component Introduction",-1),A=Object(o["f"])("p",null,[Object(o["f"])("span",{class:"quote"},' "Vue is designed from the ground up to be incrementally adoptable". '),Object(o["f"])("span",{class:"quote--author"},[Object(o["f"])("a",{href:"https://vuejs.org/v2/guide/"},"Vue.js Guide.")]),Object(o["e"])(" As the author of the Vue.js framework guide mentions, Vue goal is to provide a simple, flexible and easy to maintain framework. It is mostly powerful for building single page applications and is open to cooperate with other libraries. ")],-1),R=Object(o["f"])("p",null," Vue.js is very similar to React.js in terms of the way it render data on the screen. But it is also share the same approach with template section that is available in Angular. So to create a web application we will start from creating a component that define a custom elements that can be reused. Like in React this framework use JavaScript to render the data by a virtual DOM. Every data and the DOM elements are reactive and is an Vue.js instance. The app is attached to single DOM element on the page and rest is done by scripts. ",-1),B=Object(o["f"])("p",null,[Object(o["e"])(' Creation of a component is not such a simple task. Why? Because we can do it in a many ways. For the begining we will attach the Vue.js component into the existing HTML page. To do that we will use the "vue.js" library added to the HTML by '),Object(o["f"])("code",null,"<script>"),Object(o["e"])(" tag. Vue.js component is a JavaScript function that could be called inside the HTML file. ")],-1),$=Object(o["f"])("label",null,"index.html",-1),G=Object(o["f"])("p",null,[Object(o["e"])(" When the new Vue instance is called it search for element with ID provided in "),Object(o["f"])("code",null,"el"),Object(o["e"])(" parameter. In this case we will use "),Object(o["f"])("code",null,"#vue_custom_application"),Object(o["e"])(". That is the declarative rendering example. The template of that application is also defined inside clear HTML file but it also could be a part of the component. ")],-1),U=Object(o["f"])("h2",null,"Single File Component",-1),Y=Object(o["f"])("p",null,[Object(o["e"])(" Vue.js is a very flexible framework that can be used for small projects but could be also a base for the bigger projects. So to maintain the code base we can create a "),Object(o["f"])("code",null,"*.vue"),Object(o["e"])(" files that define specific Vue.js components. This approach require a build tool like Webpack that will compile the code and prepare standalone application. ")],-1),K=Object(o["f"])("label",null,"SingleComponentSelector.vue",-1),Q=Object(o["d"])("<p> Each Single File Component is a combination of template, script and style sections. As I mentioned before Vue.js is a very flexible framework so you can use different languages for each of this section. For purpouse of this project I will use default JavaScript to compare it with the Angular and React.js approach. </p><ul><li><code>template</code> - defines the HTML template that will be rendered </li><li><code>script</code> - defines the JavaScript or other language Vue component that can contain data, methods and many more things to provide some specific functionality. </li><li><code>style</code> - that defines the CSS definitions for the Vue components or just for a single component if it is <code>scoped</code>. </li></ul><h2>Basic Vue.js Component</h2><p> For smaller projects you will see the approach with components defined inside JavaScript files. Component defined with <code>Vue.component()</code> method has its own tag that is used to place that component on the page. Then the framework will create a new instance of that component. </p><label>component.js</label>",5),X=Object(o["f"])("h2",null,"Component usage",-1),Z=Object(o["f"])("p",null,"To use that component defined before we have to use its tag inside Vue instance.",-1),ee=Object(o["f"])("label",null,"index.html",-1),te=Object(o["d"])("<p> The <code>basic-component</code> component was globaly registered to Vue instance. That components could be reused in other places. </p><h2>Root Component</h2><p> When project is bigger and use <code>vue-cli</code> to create a Vue.js instance we need a root component that will be the entry point of the application. Single File Components require that definition to be able to provide specific import and export mechanism. Inside <code>public/index.html</code> we can find the <code>&lt;div id=&quot;app&quot;&gt;</code> tag that will be used to render the root component defined in <code>App.vue</code>. But the <code>main.js</code> file will contain the the JavaScript initialization code that is loaded by the index page and attaching that <code>App</code> component to that <code>div</code> with this <code>#app</code> ID. </p>",3);function ne(e,t,n,a,i,c){var l=Object(o["u"])("highlightjs");return Object(o["o"])(),Object(o["c"])("div",null,[z,A,R,B,$,Object(o["f"])(l,{language:"html",code:e.code0},null,8,["code"]),G,U,Y,K,Object(o["f"])(l,{language:"vue",code:e.code1},null,8,["code"]),Q,Object(o["f"])(l,{language:"javascript",code:e.code2js},null,8,["code"]),X,Z,ee,Object(o["f"])(l,{language:"html",code:e.code2html},null,8,["code"]),te])}var oe=n("b056"),ae=Object(o["g"])({name:"Basic",props:{framework:String},components:{highlightjs:oe["a"].component},data:function(){return{code0:'<html>\n  <head> \n    <title>Vue.js embedded</title>\n    <script type="text/javascript" src="js/vue.js"><script> \n  </head>\n\n  <body>\n        \n    <div id="vue_custom_application">\n      <h1>Welcome in Vue.js!</h1>\n    </div>\n\n    <script>\n      var vm = new Vue({\n        el: "#vue_custom_application",\n      });\n    <script>\n\n  </body>\n</html>',code1:'<template>\n<h1>Hello from Vue.js SFC</h1>\n</template>\n<script>\nexport default {\n  name: "SingleComponentSelector",\n};\n<script>\n<style>\nh1 {\n  font-weight: bold;\n}\n</style>\n    ',code2html:'<html>\n  <head>\n    <title>Vue.js component</title>\n    <script type="text/javascript" src="js/vue.js"><script>\n  </head>\n\n  <body>\n    <h2>Vue component</h2>\n    <div id="vue_main">\n      <basic-component></basic-component>\n    </div>\n  </body>\n  <script type="text/javascript" src="js/component.js"><script>\n\n</html>',code2js:"Vue.component('basic-component', {\n  template: '<h1>Hello from Vue.js component</h1>',\n});\n\nvar vm = new Vue({\n  el: '#vue_main'\n});\n"}}});const ie=f()(ae,[["render",ne]]);var ce=ie,le=Object(o["f"])("h1",null,"Component data, methods and properties",-1),re=Object(o["f"])("p",null," All data within a Vue.js component use reactive data structures. Values and DOM element are linked into the Obervable variables due to that while we will be updatating the value of the variable, we will also be updating the DOM element accordingly. ",-1),se=Object(o["f"])("h2",null,"Component internal data",-1),de=Object(o["f"])("p",null,[Object(o["e"])(' Vue component could be treated as an kind of object that has properties and methods. When in Json object notation we create a property we use ":" (colon) to separate the property name from the value. The similar approach is used in Vue.js components. There are a few properties that are responsible for the component\'s behavior. One of them is the '),Object(o["f"])("code",null,"data"),Object(o["e"])(" method. This is responsible for storing the component's data. It should be an function that returns an other objects like in the basic example below. ")],-1),pe=Object(o["f"])("label",null,"index.html",-1),ue=Object(o["f"])("label",null,"main.js",-1),he=Object(o["d"])('<p> Now using interpolation experssion in HTML template we can access the data stored in the component&#39;s data and replace that <code>welcomeMessage</code> with the value of that variable. When we use <code>{{ }}</code> (double curly braces) we are using interpolation expression. Specific values are initialized inside that <code>data</code> method and what is important is that that all that variables are an instances of Obervable class. </p><p> That vue.js object has its own lifecycle hooks methods. That allows user to initialize the component&#39;s data later when the component is created or mounted. One of them is the <code>mounted()</code> hook. This is called when the component is attached to the page and rendered the template. More about that is available on the <a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram">Vue.js documentation</a>. </p><h2>Passing properties</h2><p> How to build a application without component interaction? Fortunately Vue.js provides a way to pass properties to the component. Very similar to the way we define data inside component we are defining a properties that are passed to the component. To do that we will use <code>props: [...]</code> property. In a basic example it is a property that has an array of strings. Each of those strings is a property name that could be passed into the component. But there is also a way to define a properties as an object. In that case we have to define the property name as a key and the type of that property as a value. </p><label>Props.vue</label>',5),me=Object(o["f"])("p",null," Because attributes names in HTML are case-insensitive it doesn't matter if we use in our template camleCased prop names or kebab-cased equivalents. Browser will recognize then and render the correct value. ",-1),be=Object(o["f"])("label",null,"Parent.vue",-1),fe=Object(o["d"])("<p> While using the approach with Single File Components we can import and export the components. To use a child component in the parent we have to import it from the origin place and add register that component in the <code>components: {...}</code> property of Parent. Now we can use this props to pass the string value to the child component. </p><h3> Passing Variables </h3><p> Regarding passing a Static variables we can pass a value that could be any type of data. To inform the Vue instance that we want to pass a variable as a value of property we have to use the <code>v-bind</code> directive. Directives are powerful special attributes provided by Vue.js that allow us perform reactive behavior on the DOM. Every Vue.js directive is prefixed with <code>v-</code>. In the example below we are passing a variable as a value of property using <code>v-bind:welcomeMessage</code>. </p><label>Parent.vue</label>",4),ve=Object(o["d"])("<p> Some of the Vue.js directives has a shorthand version. In that case we can use just<code>:</code> (colon) to indicate that we want to pass a variable as a value of property (<code>:welcomeMessage</code>, so we reduced the <code>v-bind</code> text). We have to remember that we should not change the recived value from parent inside the child component. </p><h2> Emmiting Events </h2><p> Communication from child to parent is much easier than providing a props into the component. That works on the same principle like in many other frameworks. We can emit an event from the child to the parent that could handle that action. To emit a such event we neet to use the <code>$emit()</code> method from core Vue.js instance. As the argument we pass the name of the event and the data that will be transfered. Now only the parent have to listen for that event and handle it. To do that we have to use the <code>v-on</code> directive on a specific event name for that component. For that directive there is also a shorthand version so v-on: can be replaced by <code>@</code> (at) sign. </p><label>SingleEmit.vue</label>",4),je=Object(o["f"])("p",null,[Object(o["e"])(" The thing that we can see is the new property for our Vue.js component. It is the "),Object(o["f"])("code",null,"methods"),Object(o["e"])(" property. This property is an object that contains all the methods that could be used by the component. In child component we have a method called "),Object(o["f"])("code",null,"increaseNumber()"),Object(o["e"])(" that is responsible for increasing the value of counter inside the child component and the result is emitted to the parent component as an "),Object(o["f"])("b",null,"'increased-event'"),Object(o["e"])(" event. ")],-1),ge=Object(o["f"])("label",null,"Parent.vue",-1),we=Object(o["f"])("p",null,[Object(o["e"])(" Parent component is listening for the event and when it is emitted it will call the method "),Object(o["f"])("code",null,"onIncreased()"),Object(o["e"])(" that receives the data that was emitted. Recived value is saved to the "),Object(o["f"])("code",null,"counter"),Object(o["e"])(" variable inside the parent component and when it is updated the HTML code is immediately updated. ")],-1);function Oe(e,t,n,a,i,c){var l=Object(o["u"])("highlightjs");return Object(o["o"])(),Object(o["c"])("div",null,[le,re,se,de,pe,Object(o["f"])(l,{language:"html",code:e.code0html},null,8,["code"]),ue,Object(o["f"])(l,{language:"javascript",code:e.code0js},null,8,["code"]),he,Object(o["f"])(l,{language:"vue",code:e.code1vue},null,8,["code"]),me,be,Object(o["f"])(l,{language:"vue",code:e.code1parent},null,8,["code"]),fe,Object(o["f"])(l,{language:"vue",code:e.code2parent},null,8,["code"]),ve,Object(o["f"])(l,{language:"vue",code:e.code3child},null,8,["code"]),je,ge,Object(o["f"])(l,{language:"vue",code:e.code3parent},null,8,["code"]),we])}var ye=Object(o["g"])({name:"Props",components:{highlightjs:oe["a"].component},data:function(){return{code0html:'<html>\n    <head>\n        <title>Vue.js props</title>\n        <script type="text/javascript" src="js/vue.js"><script>\n    </head>\n\n    <body>\n    <div id="app">\n        <h1>Hello from {{welcomeMessage}}</h1>\n    </div>\n    <script type="text/javascript" src="js/main.js"><script>\n</body>',code0js:"var app = new Vue({\n    el: '#app',\n    data() {\n        return {\n            welcomeMessage: 'Vue.js property!',\n        }\n    },\n})",code1vue:"<template>\n    <h1>Hello from {{welcomeMessage}}</h1>\n</template>\n<script>\nexport default {\n    props: ['welcomeMessage'],\n}\n<script>\n<style>\n</style>\n",code1parent:'<template>\n    <props welcome-message="Vue.js child component"></props>\n</template>\n<script>\nimport Props from "./Props.vue";\nexport default {\n    components: {\n        Props,\n    },\n}\n<script>\n',code2parent:'<template>\n    <props v-bind:welcomeMessage="framework"></props>\n</template>\n<script>\nimport Props from "./Props.vue";\nexport default {\n    components: {\n        Props,\n    },\n    data() {\n        return {\n            framework: \'Vue.js\',\n        }\n    }\n}\n<script>\n',code3child:"<template>\n    <button @click=\"increaseNumber()\">Increase number</button>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            currentValue: 0,\n        }\n    },\n    methods: {\n        increaseNumber() {\n            this.currentValue++;\n            this.$emit('increased-event', this.currentValue);\n        },\n    },\n}\n<script>\n<style>\n</style>\n",code3parent:'<template>\n<div>\n    <p>Clicked: {{counter}} times.</p>\n    <single-emit v-on:increased-event="onIncreased"></single-emit>\n</div>\n</template>\n<script>\nimport SingleEmit from "./SingleEmit.vue";\nexport default {\n    components: {\n        SingleEmit,\n    },\n    data() {\n        return {\n            counter: 0,\n        }\n    },\n    methods: {\n        onIncreased(value) {\n            this.counter = value;\n        },\n    },\n}\n<script>\n<style>\n</style>\n'}}});const Ve=f()(ye,[["render",Oe]]);var Te=Ve,xe=Object(o["d"])("<h1>Content projection</h1><p> To build a powerful application that is flexible and extensible, we should provide some outlets for content. Using the <code>slot</code> tag, we can pass not only the properties but also the HTML content to specific the components. That pattern enable us to build a flexible application with more reusable components. </p><h2> Single-slot </h2><p> To serve content into specific component we have to define the <code>slot</code> tag somewhere in the component template. That content distribution api allows us to compose components in more spohisticatd way. Defining a <code>slot</code> tag inside Child inorm Vue where it should place the content of data provided by parent component. The example below shows how to use that selector to render data from the parent component. The content will be rendered below header selector and above the footer. Each child component will be rendered in the same way. So that means that all child components will have a title and a footer but their &quot;body&quot; will be different depending on the data provided by parent. Now everthing within <code>child</code> tag will be rendered inside Child component inside the <code>slot</code> tag. </p><label>Child.vue</label>",5),Ce=Object(o["f"])("label",null,"Parent.vue",-1),Se=Object(o["d"])("<p> Taht content distribution pattern is a powerful tool to build flexible and extensible components. This could be used to build a common component that will be displaying different content on the dashboard. This could be also a template for a blog post and so on. </p><h2> Multiple-slots </h2><p> Sometimes to compose components we will need more than one slot. It could be easly resolved by adding a <code>name</code> attribute to the <code>slot</code> tag. The name attribute creates a unique named outlet for the component. If we do not provide that attribute to the slot tag by default it will have &quot;default&quot; name. To use that named outlet we have to use the <code>template</code> tag with additional directive <code>v-slot:name</code> where name is the name of the slot in child component. </p><label>Child.vue</label>",4),ke=Object(o["f"])("label",null,"Parent.vue",-1);function Ie(e,t,n,a,i,c){var l=Object(o["u"])("highlightjs");return Object(o["o"])(),Object(o["c"])("div",null,[xe,Object(o["f"])(l,{language:"vue",code:e.code0child},null,8,["code"]),Ce,Object(o["f"])(l,{language:"vue",code:e.code0parent},null,8,["code"]),Se,Object(o["f"])(l,{language:"vue",code:e.code1child},null,8,["code"]),ke,Object(o["f"])(l,{language:"vue",code:e.code1parent},null,8,["code"])])}var Pe=Object(o["g"])({name:"Slots",components:{highlightjs:oe["a"].component},data:function(){return{code0child:"<template>\n    <div>\n        <h1>Header of child</h1>\n        <slot></slot>\n        <footer>Footer of child</footer>\n    </div>\n</template>\n<script>\nexport default { }\n<script>",code0parent:'<template>\n    <div>\n        <child>\n            <section>\n                <h2>Parent section to be displayed</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </section>\n        </child>\n    </div>\n</template>\n<script>\nimport Child from "./Child.vue";\nexport default {\n    components: {\n        Child\n    },\n}\n<script>',code1child:'<template>\n    <div>\n        <slot name="header"></slot>\n        <slot></slot>\n        <footer>Footer of child</footer>\n    </div>\n</template>\n<script>\nexport default { }\n<script>',code1parent:'<template>\n    <div>\n        <child>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            <template v-slot:header>\n                <h2>Parent section to be displayed</h2>\n            </template>\n        </child>\n    </div>\n</template>\n<script>\nimport Child from "./Child.vue";\nexport default {\n    components: {\n        Child\n    },\n}\n<script>'}}});const Me=f()(Pe,[["render",Ie]]);var Le=Me,_e=[{path:"/",name:"Home",component:q},{path:"/project-initialization",name:"ProjectInitialization",component:J},{path:"/simple-component",name:"SimpleComponent",component:ce},{path:"/props-component",name:"PropsComponent",component:Te},{path:"/slots-component",name:"SlotsComponent",component:Le}],He=Object(I["a"])({history:Object(I["b"])(),routes:_e}),Fe=He,qe=n("5502"),Ee=Object(qe["a"])({state:{},mutations:{},actions:{},modules:{}}),De=n("1020"),Ne=n.n(De),We=n("ee8c"),Je=n.n(We),ze=n("8dcb"),Ae=n.n(ze),Re=n("4dd1"),Be=n.n(Re),$e=n("8ed1"),Ge=n.n($e);n("8da8");Ne.a.registerLanguage("javascript",Be.a),Ne.a.registerLanguage("html",Ae.a),Ne.a.registerLanguage("css",Je.a),Ne.a.registerLanguage("vue",Ge.a),Object(o["b"])(k).use(Ee).use(Fe).use(oe["a"]).mount("#app")},d9bf:function(e,t,n){},ffd8:function(e,t,n){"use strict";n("a13a")}});
//# sourceMappingURL=app.c0a48be0.js.map