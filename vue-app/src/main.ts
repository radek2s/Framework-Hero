import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import hljs from 'highlight.js/lib/core';
import hljsVuePlugin from "@highlightjs/vue-plugin";

import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/default.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);

    createApp(App)
        .use(store)
        .use(router)
        .use(hljsVuePlugin)
        .mount("#vue-app");
