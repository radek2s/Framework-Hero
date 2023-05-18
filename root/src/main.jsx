import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import App from 'reactApp/web-components'
import {mount} from 'angularApp/angular-components'
import AngularAppModule from './AngularApp'
// import("angularApp/angular-components")


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AngularAppModule/>
    // <app-root/>
    
)
