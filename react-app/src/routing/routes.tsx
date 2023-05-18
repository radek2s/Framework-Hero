import Basic from "../views/Basic";
import Home from "../views/Home";
import ReactInit from "../views/Initialization";
import PropsExample from "../views/Props";
import SlotsExample from "../views/Slots";
import Extend from "../views/Extend";
import Directives from "../views/Directives";
import StoreView from "../views/StoreView";
import Lifecycle from "../views/Lifecycle";
import Service from "../views/Service";
import App from "../App";
import { RouteObject } from "react-router-dom";
// import { NavigationManager } from "./NavManager";

export const routes:RouteObject[] = [{
    path: "/",
    element: <App/>,
    children: [
        {
            index: true,
            element:<Home framework={"React"}/>
        },{
            path: 'project-initialization',
            element:<ReactInit/>
        }, {
            path: 'simple-component',
            element: <Basic/>
        }, {
            path: 'props-component',
            element: <PropsExample/>
        }, {
            path: 'lifecycle-component',
            element: <Lifecycle/>
        },{
            path: 'slots-component',
            element: <SlotsExample/>
        }, {
            path: "extend-component",
            element: <Extend/>
        }, {
            path: "directives-component",
            element: <Directives/>
        }, {
            path: "store-component",
            element: <StoreView/>
        }, {
            path: "services",
            element: <Service/>
        }
    ]
}]

export default routes;