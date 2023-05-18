import React from 'react'
import ReactDOM from 'react-dom/client'
import '@smastrom/react-rating/style.css'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/router.jsx'
import AuthProvider from './AuthProviders/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
