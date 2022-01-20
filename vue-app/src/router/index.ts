import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";
import Basic from "../views/Basic.vue";
import Props from "../views/Props.vue";
import Slots from "../views/Slots.vue";
import Extend from "../views/Extend.vue";
import DirectivesView from "../views/DirectivesView.vue";
import StoreView from "../views/StoreView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/project-initialization",
    name: "ProjectInitialization",
    component: Project,
  },
  {
    path: "/simple-component",
    name: "SimpleComponent",
    component: Basic,
  },
  {
    path: "/props-component",
    name: "PropsComponent",
    component: Props,
  },
  {
    path: "/slots-component",
    name: "SlotsComponent",
    component: Slots,
  },
  {
    path: "/extend-component",
    name: "ExtendComponent",
    component: Extend,
  },
  {
    path: "/directives-component",
    name: "DirectivesComponent",
    component: DirectivesView,
  },
  {
    path: "/store-component",
    name: "StoreComponent",
    component: StoreView,
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
