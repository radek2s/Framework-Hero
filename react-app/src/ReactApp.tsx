import React from "react";
import ReactDOM from 'react-dom'

import { RouterProvider, createHashRouter } from "react-router-dom";
import routes from "./router";

const router = createHashRouter(routes)
class ReactApp extends React.Component {
    render(): React.ReactNode {
        
        return (<RouterProvider router={router}/>)
    }
}

class ReactAppMfe extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(<ReactApp/>,this)
    }
}

customElements.define('react-element', ReactAppMfe);

