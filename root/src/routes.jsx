// import AngularAppModule from "./AngularApp";
// import ReactAppModule from "./ReactApp";
// import VueAppModule from "./VueApp";
import Root from "./Root";
import { Suspense, lazy } from "react";

const ReactAppLazy = lazy(() => import('./ReactApp'))

export const routes = [{
    path: "/",
    element: <Root/>,
    children: [
        {
            path:`/react/*`,
            element: <Suspense fallback="Loading React Application..."><ReactAppLazy/></Suspense>
        }

    ]
},
// {
//     path: "/react",
//     element: <ReactAppModule/>
// }, 
// {
//     path: "/angular",
//     element: <AngularAppModule/>
// }, 
// {
//     path: "/vue",
//     element: <VueAppModule/>
// }
]