import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'react-highlight/node_modules/highlight.js/styles/atom-one-dark.css'
import routes from "./routing/routes";

export const FrameworkHeroReact = () => {
    return <RouterProvider router={createBrowserRouter(routes)}/>
}