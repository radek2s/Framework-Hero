import {render} from 'react-dom';
import './index.css';

import 'react-highlight/node_modules/highlight.js/styles/atom-one-dark.css'

import './i18n'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import React from 'react';
import routes from './router';

const container = document.getElementById('root')
const router = createHashRouter(routes)
render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>, container)
{/* <App/>, container) */}



