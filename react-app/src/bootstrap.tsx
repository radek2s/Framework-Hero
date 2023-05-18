// import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { createRouter } from "./routing/routerFactory";
// import { RoutingStrategy } from "./routing/types";
import 'react-highlight/node_modules/highlight.js/styles/atom-one-dark.css'
// import "./index.css";
// import './i18n'
import routes from "./routing/routes";

// const mount = ({
//   mountPoint,
// //   initialPathname,
// //   routingStrategy,
// }: {
//   mountPoint: HTMLElement;
//   initialPathname?: string;
//   routingStrategy?: RoutingStrategy;
// }) => {
// //   const router = createRouter({ strategy: routingStrategy, initialPathname });
//   const router = createBrowserRouter(routes);
//   const root = createRoot(mountPoint);
//   root.render(<RouterProvider router={router} />);

//   return () => queueMicrotask(() => root.unmount());
// };

// export { mount };

export const FrameworkHeroReact = () => {
    return <RouterProvider router={createBrowserRouter(routes)}/>
}