import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { routes } from './routes'
// import App from './App.jsx'
// import './index.css'
// import App from 'reactApp/web-components'
// import {mount} from 'angularApp/angular-components'
// import AngularAppModule from './AngularApp'
// import VueAppModule from './VueApp'
// import ReactAppModule from './ReactApp'
// import {mount as mountVue} from 'vueApp/vue-components'
// import("angularApp/angular-components")

ReactDOM.createRoot(document.getElementById('shell')).render(
    <RouterProvider router={createHashRouter(routes)}/>
    // <>
    // <ReactAppModule/>
    // <VueAppModule/>
    // </>
)
