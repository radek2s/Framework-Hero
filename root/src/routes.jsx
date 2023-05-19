import AngularAppModule from "./AngularApp";


import Root from "./Root";
import { Suspense, lazy } from "react";
import VueAppModule from "./VueApp";

const ReactAppLazy = lazy(() => import('./ReactApp'))
const VueAppLazy = lazy(() => import('./VueApp'))

export const routes = [{
    path: "/",
    element: <Root/>,
    errorElement: <></>,
    children: [
        {
            path:`/react/*`,
            element: <Suspense fallback="Loading React Application..."><ReactAppLazy/></Suspense>
        },
        {
            //TODO: Angular has no styles
            path: "/angular/*",
            element: <AngularAppModule/>
        }, 
        {
            path: "/vue/*",
            element: <VueAppModule/>,
            errorElement: <div></div>
        },
        // {
        //     path: "/vue/*",
        //     element: <Suspense fallback="Loading React Application..."><VueAppLazy/></Suspense>,
        //     errorElement: <div></div>
        // }

    ]
},
// {
//     path: "/react",
//     element: <ReactAppModule/>
// }, 
]