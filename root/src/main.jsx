import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import {App} from 'reactApp/web-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1><App/></h1>
  </React.StrictMode>,
)
