import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { routes } from './routes'

const baseUrl = import.meta.env.BASE_URL || ""

ReactDOM
    .createRoot(document.getElementById('shell'))
    .render(
        <RouterProvider router={createHashRouter(routes)} basename={baseUrl} />
    )
