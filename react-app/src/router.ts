import IRoute from "./interfaces/route";
import Basic from "./views/Basic";
import Home from "./views/Home";
import ReactInit from "./views/Initialization";
import PropsExample from "./views/Props";
import SlotsExample from "./views/Slots";
import Extend from "./views/Extend";
import Directives from "./views/Directives";
import StoreView from "./views/StoreView";
import Lifecycle from "./views/Lifecycle";
import Service from "./views/Service";

export const routes:IRoute[] = [
    {
        path: '/',
        name: "Home Page",
        component: Home,
        exact: true,
    },
    {
        path: '/project-initialization',
        name: "Project Initialization",
        component: ReactInit,
        exact: true,
    },
    {
        path: '/simple-component',
        name: "Simple Component",
        component: Basic,
        exact: true,
    }, {
        path: '/props-component',
        name: "Props Component",
        component: PropsExample,
        exact: true,
    }, {
        path: '/lifecycle-component',
        name: "Lifecycle Component",
        component: Lifecycle,
        exact: true,
    },{
        path: '/slots-component',
        name: "Slots Component",
        component: SlotsExample,
        exact: true,
    }, {
        path: "/extend-component",
        name: "Extend Component",
        component: Extend,
        exact: true,
    }, {
        path: "/directives-component",
        name: "Directives Component",
        component: Directives,
        exact: true,
    }, {
        path: "/store-component",
        name: "Store Component",
        component: StoreView,
        exact: true,
    }, {
        path: "/services",
        name: "Services",
        component: Service,
        exact: true
    }

];

export default routes;