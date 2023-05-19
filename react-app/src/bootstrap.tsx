import {  RouterProvider, createBrowserRouter } from "react-router-dom";
// import { BrowserRouter, Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import 'react-highlight/node_modules/highlight.js/styles/atom-one-dark.css'
import routes from "./routing/routes";

export const FrameworkHeroReact = () => {
    // <BrowserRouter basename="/react">
    //     <Router />
    // </BrowserRouter>
    return <RouterProvider router={createBrowserRouter(routes, {basename: "/react"})}/>
    // <RouterProvider router={{routes, basename: "/react"}}/>
    // return <RouterProvider router={createBrowserRouter(routes)} basename="/react"/>
}