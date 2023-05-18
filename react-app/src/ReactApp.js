import React from "react";
import {createRoot } from 'react-dom/client'

// import { RouterProvider, createHashRouter } from "react-router-dom";
// import routes from "./router";

// const router = createHashRouter(routes)
class ReactApp extends React.Component {
    render() {
        <div>Hello</div>
        // return (<RouterProvider router={router}/>)
    }
}

const container = document.getElementById('root')

class ReactAppMfe extends HTMLElement {
    connectedCallback() {
        const el = document.createElement("div")
        el.id = "root"
        document.body.append(el)

        const root = createRoot(el);
        root.render(<ReactApp />);

        // render(<ReactApp/>,this)
    }
}

customElements.define('react-element', ReactAppMfe);

