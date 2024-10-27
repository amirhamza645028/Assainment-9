import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
<<<<<<< HEAD
import Authprovider from './provider/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={Router}></RouterProvider>
    </Authprovider>
=======
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
   <RouterProvider router={Router}></RouterProvider>

    </AuthProvider>
>>>>>>> a88369bacb8850717d006e22029afb9ce6456f16
  </StrictMode>,
)
